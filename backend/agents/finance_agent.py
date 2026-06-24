from services.llm import llm

def finance_agent(state):

    prompt = f"""
    Startup Idea:
    {state['idea']}

    Generate:

    Startup Costs
    Revenue Model
    Monthly Revenue
    Year 1 Projection
    Break Even Analysis
    """

    response = llm.invoke(prompt)

    return {
        "finance_analysis": response.content
    }