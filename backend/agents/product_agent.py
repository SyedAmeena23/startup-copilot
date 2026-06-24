from services.llm import llm

def product_agent(state):

    prompt = f"""
    Startup Idea:
    {state['idea']}

    Create:

    MVP Features
    Product Roadmap
    Future Features
    """

    response = llm.invoke(prompt)

    return {
        "product_analysis": response.content
    }