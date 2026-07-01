from services.llm import llm
import json

def finance_agent(state):
    print("Finance agent invoked with state:", state)

    prompt = f"""
Startup Idea:
{state["idea"]}

Market Analysis:
{state["market_analysis"]}

Competitor Analysis:
{state["competitor_analysis"]}

Return ONLY valid JSON.

Format:

{{
    "investment":"",
    "monthly_expenses":"",
    "monthly_revenue":"",
    "profit":"",
    "break_even":""
}}

Do not write markdown.
Do not use ```json.
Return only the JSON object.
"""

    response = llm.invoke(prompt)

    return {
        "finance_plan": response.content
    }