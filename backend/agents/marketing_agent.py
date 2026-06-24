from services.llm import llm

def marketing_agent(state):

    prompt = f"""
    Startup Idea:
    {state['idea']}

    Create:

    Marketing Strategy
    Acquisition Plan
    Retention Plan
    Social Media Strategy
    """

    response = llm.invoke(prompt)

    return {
        "marketing_analysis": response.content
    }