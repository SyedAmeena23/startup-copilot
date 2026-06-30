from services.llm import llm

def product_agent(state):

    prompt = f"""
Startup Idea:
{state["idea"]}

Market Analysis:
{state["market_analysis"]}

Finance Plan:
{state["finance_plan"]}

Create:

- MVP Features
- Product Roadmap
- Phase 1
- Phase 2
- Phase 3

Ensure the roadmap matches the estimated budget.
"""

    response = llm.invoke(prompt)

    return {
        "product_strategy": response.content
    }