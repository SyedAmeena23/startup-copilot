from services.llm import llm

def competitor_agent(state):

    prompt = f"""
    Startup Idea:
    {state['idea']}

    Find:
    - Top competitors
    - Pricing
    - Strengths
    - Weaknesses
    - SWOT Analysis
    """

    response = llm.invoke(prompt)

    return {
        "competitor_analysis": response.content
    }