from typing import TypedDict

class StartupState(TypedDict):
    idea: str

    plan: str

    market_analysis: str
    competitor_analysis: str
    finance_plan: str
    product_strategy: str
    marketing_strategy: str

    startup_score: int
    recommendation: str

    final_report: dict