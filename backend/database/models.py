from sqlalchemy import Column, Integer, String, Text

from database.database import Base


class StartupPlan(Base):

    __tablename__ = "startup_plans"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String)

    idea = Column(String)

    report = Column(Text)