#!/usr/bin/env python3
"""
Script pentru aplicare batch UI polish modifications pe app/page.tsx
"""

import re

# Citește fișierul
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Modificări per secțiune

# 1. Nav links
content = re.sub(
    r'<a href="(#[^"]+)" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"',
    r'<a href="\1" className="nav-link text-sm font-medium text-gray-600 hover:text-gray-900"',
    content
)

# 2. Header CTA button
content = re.sub(
    r'<button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-\[length:200%_auto\] animate-gradient-shift text-white px-6 py-2\.5 rounded-lg hover:shadow-xl transition font-medium text-sm">',
    r'<button className="btn-primary bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-[length:200%_auto] animate-gradient-shift text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-blue-glow">',
    content
)

# 3. Hero section
content = re.sub(
    r'<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 via-white to-white relative overflow-hidden">',
    r'<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-mesh relative overflow-hidden fadeIn">',
    content
)

# 4. Hero blobs (animate-pulse cu delay)
content = re.sub(
    r'<div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />',
    r'<div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 animate-pulse" />',
    content
)
content = re.sub(
    r'<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />',
    r'<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: \'1s\'}} />',
    content
)

# 5. Hero CTAs container
content = re.sub(
    r'<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">',
    r'<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 fadeInUp delay-200">',
    content,
    count=1  # doar primul match (hero section)
)

# 6. Hero primary CTA
content = re.sub(
    r'<button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-\[length:200%_auto\] animate-gradient-shift text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all font-semibold text-lg">',
    r'<button className="btn-primary bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-[length:200%_auto] animate-gradient-shift text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-blue-glow">',
    content
)

# 7. Hero secondary CTA (demo button)
content = re.sub(
    r'<a href="/demo" className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition font-semibold text-lg inline-block">',
    r'<a href="/demo" className="btn-secondary border-2 border-subtle bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg inline-block shadow-depth-sm">',
    content
)

# 8. Stats cards (Beneficii section)
content = re.sub(
    r'className="text-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"',
    r'className="card-subtle text-center glass-blue border-subtle rounded-2xl p-6 shadow-depth-md"',
    content
)

# 9. CTA section form
content = re.sub(
    r'<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">',
    r'<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6 fadeInUp delay-300">',
    content
)

# 10. CTA form input
content = re.sub(
    r'className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium bg-white/95 backdrop-blur-sm"',
    r'className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium glass shadow-depth-md transition-smooth"',
    content
)

# 11. CTA form button
content = re.sub(
    r'<button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition">',
    r'<button className="btn-primary bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-depth-lg">',
    content
)

# 12. FAQ cards
content = re.sub(
    r'className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"',
    r'className="card-subtle glass border-subtle rounded-2xl p-6 shadow-depth-md"',
    content
)

# 13. Transition > removed (already in custom classes)
content = re.sub(r' transition"', r'"', content)
content = re.sub(r' transition ', r' ', content)
content = re.sub(r' transition-all"', r'"', content)
content = re.sub(r' transition-all ', r' ', content)

# Salvează fișierul modificat
with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ UI polish aplicat cu succes pe app/page.tsx")
