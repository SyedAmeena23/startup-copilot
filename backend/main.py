from fastapi import FastAPI
from pydantic import BaseModel

from graph.workflow import graph

app = FastAPI()

class StartupRequest(BaseModel):
    idea: str

@app.post("/generate")
def generate(request: StartupRequest):

    result = graph.invoke({
        "idea": request.idea
    })

    return result