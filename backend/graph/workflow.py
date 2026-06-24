from langgraph.graph import StateGraph, END

from services.state import StartupState
from agents.market_agent import market_agent

builder = StateGraph(StartupState)

builder.add_node("market", market_agent)

builder.set_entry_point("market")

builder.add_edge("market", END)

graph = builder.compile()