from services.llm import llm

def finance_agent(state):

    prompt = f"""
Startup Idea:
{state["idea"]}

Market Analysis:
{state["market_analysis"]}

Competitor Analysis:
{state["competitor_analysis"]}

Based on the above information estimate:

- Initial Investment
- Monthly Expenses
- Revenue Projection
- Profit Projection
- Break-even Point

Use realistic assumptions based on the competitors.
"""

    response = llm.invoke(prompt)

    return {
        "finance_plan": response.content
    }