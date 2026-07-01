from services.llm import llm

def competitor_agent(state):
    print("Competitor agent invoked with state:", state)


    prompt = f"""
Startup Idea:
{state["idea"]}

Market Analysis:
{state["market_analysis"]}

Using the market analysis above, provide:

1. Top 5 Competitors
2. Pricing
3. Strengths
4. Weaknesses
5. SWOT Analysis

Make the competitor analysis consistent with the market analysis.
"""

    response = llm.invoke(prompt)

    return {
        "competitor_analysis": response.content
    }