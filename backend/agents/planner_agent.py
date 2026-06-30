from services.llm import llm

def planner_agent(state):

    prompt = f"""
    Startup Idea:
    {state['idea']}

    Create a startup execution plan.

    Mention:
    - Business Summary
    - Market Research Needed
    - Competitor Analysis Needed
    - Financial Planning Needed
    - Product Strategy Needed
    - Marketing Strategy Needed

    Keep it concise.
    """

    response = llm.invoke(prompt)

    return {
        "plan": response.content
    }