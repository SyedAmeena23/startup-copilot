def report_agent(state):
    print("Report agent invoked with state:", state)

    summary = f"""
🚀 Startup Idea
{state["idea"]}

This startup has completed AI-powered market research,
competitor analysis, financial planning,
product roadmap generation, and marketing planning.

Scroll down to explore the complete business plan.
"""

    score = 0

    if state["market_analysis"]:
        score += 20

    if state["competitor_analysis"]:
        score += 20

    if state["finance_plan"]:
        score += 20

    if state["product_strategy"]:
        score += 20

    if state["marketing_strategy"]:
        score += 20

    if score >= 90:
        recommendation = "Excellent startup idea. Focus on execution and customer acquisition."

    elif score >= 70:
        recommendation = "Strong startup plan. Improve financial projections and market differentiation."

    else:
        recommendation = "The startup needs more validation before launch."

    return {
    "final_report": {
        "idea": state["idea"],
        "summary": summary,
        "startup_score": score,
        "recommendation": recommendation,
        "market_analysis": state["market_analysis"],
        "competitor_analysis": state["competitor_analysis"],
        "finance_plan": state["finance_plan"],
        "product_strategy": state["product_strategy"],
        "marketing_strategy": state["marketing_strategy"],
    }
}