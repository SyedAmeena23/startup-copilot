def report_agent(state):

    summary = f"""
🚀 Startup Idea
{state["idea"]}

This startup has completed AI-powered market research,
competitor analysis, financial planning,
product roadmap generation, and marketing planning.

Scroll down to explore the complete business plan.
"""

    return {
        "final_report": {
            "summary": summary,
            "market_analysis": state["market_analysis"],
            "competitor_analysis": state["competitor_analysis"],
            "finance_plan": state["finance_plan"],
            "product_strategy": state["product_strategy"],
            "marketing_strategy": state["marketing_strategy"],
        }
    }