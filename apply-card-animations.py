#!/usr/bin/env python3
"""
Aplică animation classes pe feature cards, "For Who" cards, ethics cards
"""

import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# === FEATURE CARDS (Cum functioneaza section) ===
# Pattern: className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6...
feature_cards_pattern = r'className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 ([^"]*)" în secțiunea "Cum funcționează"'

# Mai simplu: înlocuim direct toate cards din "Cum funcționează"
# Găsim secțiunea între id="cum-functioneaza" și următoarea secțiune
cum_func_section = re.search(r'id="cum-functioneaza".*?(?=<section|$)', content, re.DOTALL)

if cum_func_section:
    section_text = cum_func_section.group(0)
    # Înlocuim card styling
    section_text = re.sub(
        r'className="relative group">',
        r'className="relative group">',  # păstrăm group wrapper
        section_text
    )
    section_text = re.sub(
        r'className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl[^"]*h-full"',
        r'className="card-lift glass border-subtle rounded-2xl p-6 h-full shadow-depth-md hover-glow"',
        section_text
    )
    # Replace în content original
    content = content.replace(cum_func_section.group(0), section_text)

# === "FOR WHO" CARDS (Beneficii section) ===
for_who_pattern = r'className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl[^"]*"'
content = re.sub(
    for_who_pattern,
    r'className="card-lift glass p-8 rounded-2xl border-subtle shadow-depth-lg"',
    content
)

# === ETHICS CARDS ===
ethics_card_pattern = r'className="flex space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg[^"]*"'
content = re.sub(
    ethics_card_pattern,
    r'className="card-subtle flex space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white border-subtle rounded-2xl shadow-depth-md"',
    content
)

# === BEFORE/AFTER COMPARISON CARDS ===
content = re.sub(
    r'className="bg-red-50/60 border border-red-100 rounded-2xl p-8"',
    r'className="bg-red-50/60 border border-red-100 rounded-2xl p-8 shadow-depth-md fadeInUp"',
    content
)
content = re.sub(
    r'className="bg-green-50/60 border border-green-100 rounded-2xl p-8"',
    r'className="bg-green-50/60 border border-green-100 rounded-2xl p-8 shadow-depth-md fadeInUp delay-200"',
    content
)

# === AI LIMITATIONS CARDS (bottom of ethics section) ===
content = re.sub(
    r'<div className="grid md:grid-cols-2 gap-6 mb-12">\s*<div className="bg-red-50/60 border border-red-100 rounded-2xl p-6">',
    r'<div className="grid md:grid-cols-2 gap-6 mb-12">\n            <div className="bg-red-50/60 border border-red-100 rounded-2xl p-6 shadow-depth-md fadeInUp">',
    content
)
content = re.sub(
    r'<div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6">',
    r'<div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 shadow-depth-md fadeInUp delay-200">',
    content
)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Card animations aplicat cu succes")
