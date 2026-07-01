from fastapi import FastAPI
from fastapi import Query

from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import FileResponse
from pdf_generator import generate_pdf
from database.database import engine
from database.models import Base
from graph.workflow import graph
from database.database import SessionLocal
from database.crud import save_plan
from fastapi.middleware.cors import CORSMiddleware
import json
from database.crud import (
    save_plan,
    get_user_plans,
    delete_plan
)
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
         "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine)
latest_report = None

class StartupRequest(BaseModel):
    user_id: str
    idea: str


@app.post("/generate")
def generate(request: StartupRequest):

    global latest_report

    print("Request received")
    print("Idea:", request.idea)

    result = graph.invoke({
        "idea": request.idea
    })

    latest_report = result["final_report"]

    db = SessionLocal()

    save_plan(
        db,
        request.user_id,
        request.idea,
        json.dumps(result)
    )

    db.close()

    return result
@app.get("/download-pdf")
def download_pdf():

    if latest_report is None:
        return {"error": "Generate a startup plan first."}

    pdf_path = generate_pdf(latest_report)

    return FileResponse(
        pdf_path,
        media_type="application/pdf",
        filename="Startup_Report.pdf"
    )

@app.get("/history")
def history(user_id: str = Query(...)):

    db = SessionLocal()

    plans = get_user_plans(db, user_id)

    db.close()

    return plans
@app.delete("/delete/{plan_id}")
def delete(plan_id: int):

    db = SessionLocal()

    result = delete_plan(db, plan_id)

    db.close()

    return result