from sqlalchemy.orm import Session
from database.models import StartupPlan

def save_plan(db, user_id, idea, report):

    plan = StartupPlan(
        user_id=user_id,
        idea=idea,
        report=report
    )

    db.add(plan)
    db.commit()
    db.refresh(plan)

    return plan




def get_user_plans(db: Session, user_id: str):
    return db.query(StartupPlan).filter(
        StartupPlan.user_id == user_id
    ).all()
def delete_plan(db: Session, plan_id: int):

    plan = db.query(StartupPlan).filter(
        StartupPlan.id == plan_id
    ).first()

    if plan:
        db.delete(plan)
        db.commit()

    return {"message": "Deleted"}