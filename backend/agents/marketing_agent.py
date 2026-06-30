from services.llm import llm

def marketing_agent(state):

    prompt = f"""
Startup Idea:
{state["idea"]}

Market Analysis:
{state["market_analysis"]}

Competitor Analysis:
{state["competitor_analysis"]}

Finance Plan:
{state["finance_plan"]}

Product Strategy:
{state["product_strategy"]}

Create:

- Marketing Strategy
- Customer Acquisition Plan
- Instagram Strategy
- LinkedIn Strategy
- Referral Program
- Customer Retention Strategy

Ensure the marketing plan fits the available budget.
"""

    response = llm.invoke(prompt)

    return {
        "marketing_strategy": response.content
    }