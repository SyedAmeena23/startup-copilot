from langgraph.graph import StateGraph, END

from services.state import StartupState

from agents.market_agent import market_agent
from agents.competitor_agent import competitor_agent
from agents.finance_agent import finance_agent
from agents.product_agent import product_agent
from agents.marketing_agent import marketing_agent
from agents.report_agent import report_agent

builder = StateGraph(StartupState)

builder.add_node("market", market_agent)
builder.add_node("competitor", competitor_agent)
builder.add_node("finance", finance_agent)
builder.add_node("product", product_agent)
builder.add_node("marketing", marketing_agent)
builder.add_node("report", report_agent)

builder.set_entry_point("market")

builder.add_edge("market", "competitor")
builder.add_edge("competitor", "finance")
builder.add_edge("finance", "product")
builder.add_edge("product", "marketing")
builder.add_edge("marketing", "report")
builder.add_edge("report", END)

graph = builder.compile()