from services.llm import llm

def market_agent(state):
    print("Market agent invoked with state:", state)

    prompt = f"""
    Startup Idea:
    {state['idea']}

    Provide:
    1. Market Size
    2. Demand
    3. Target Audience
    4. Growth Opportunities
    """

    response = llm.invoke(prompt)

    return {
        "market_analysis": response.content
    }