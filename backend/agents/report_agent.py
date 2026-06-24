def report_agent(state):

    report = f"""
# MARKET ANALYSIS

{state['market_analysis']}

# COMPETITOR ANALYSIS

{state['competitor_analysis']}

# FINANCIAL PLAN

{state['finance_analysis']}

# PRODUCT ROADMAP

{state['product_analysis']}

# MARKETING STRATEGY

{state['marketing_analysis']}
"""

    return {
        "final_report": report
    }