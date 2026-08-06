import os
from PIL import Image, ImageDraw

cert_dir = r"C:\Users\USERAS\.gemini\antigravity\scratch\imtiaz-portfolio\certificates"
os.makedirs(cert_dir, exist_ok=True)

certificates = [
    {"title": "Web Development & Responsive Design", "issuer": "Frontend Academy", "date": "2024", "id": "CERT-WD-8829"},
    {"title": "WordPress Customization & Development", "issuer": "WP Mastery Hub", "date": "2024", "id": "CERT-WP-9901"},
    {"title": "UI/UX & Visual Design (Figma & Illustrator)", "issuer": "Design Guild", "date": "2024", "id": "CERT-UX-4412"},
    {"title": "Software Engineering Excellence", "issuer": "Daffodil International University", "date": "2025", "id": "CERT-DIU-1002"},
    {"title": "JavaScript ES6+ & DOM Architecture", "issuer": "JS Institute", "date": "2024", "id": "CERT-JS-7734"},
    {"title": "Python & Data Science Foundations", "issuer": "Data Tech Hub", "date": "2025", "id": "CERT-DS-3390"},
    {"title": "Telegram API & Automated Bot Integration", "issuer": "Dev Solutions", "date": "2025", "id": "CERT-TB-6621"},
]

width, height = 1200, 850

for idx, cert in enumerate(certificates):
    img = Image.new("RGB", (width, height), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)

    # Outer ornate borders
    draw.rectangle([20, 20, width - 20, height - 20], outline=(59, 130, 246), width=3)
    draw.rectangle([35, 35, width - 35, height - 35], outline=(234, 179, 8), width=2)
    draw.rectangle([45, 45, width - 45, height - 45], outline=(30, 41, 59), width=1)

    # Corner accents
    for cx, cy in [(45, 45), (width - 45, 45), (45, height - 45), (width - 45, height - 45)]:
        draw.rectangle([cx - 10, cy - 10, cx + 10, cy + 10], fill=(234, 179, 8))

    # Header badge
    draw.ellipse([width//2 - 40, 80, width//2 + 40, 160], fill=(30, 58, 138), outline=(234, 179, 8), width=3)
    draw.polygon([(width//2, 95), (width//2 + 20, 140), (width//2 - 20, 140)], fill=(234, 179, 8))

    # Text content using default font size scaling
    draw.text((width // 2, 210), "CERTIFICATE OF ACHIEVEMENT", fill=(248, 250, 252), anchor="mm")
    draw.text((width // 2, 260), "THIS IS PROUDLY PRESENTED TO", fill=(148, 163, 184), anchor="mm")
    
    # Recipient Name
    draw.text((width // 2, 330), "Md Imtiaz", fill=(56, 189, 248), anchor="mm")
    draw.line([(width // 2 - 200, 370), (width // 2 + 200, 370)], fill=(234, 179, 8), width=2)

    # Title
    draw.text((width // 2, 420), "For successfully completing the program in", fill=(203, 213, 225), anchor="mm")
    draw.text((width // 2, 480), cert["title"], fill=(250, 204, 21), anchor="mm")

    # Details
    draw.text((width // 2, 560), f"Issued by {cert['issuer']}  |  Date: {cert['date']}", fill=(148, 163, 184), anchor="mm")
    draw.text((width // 2, 600), f"Credential ID: {cert['id']}", fill=(94, 234, 212), anchor="mm")

    # Signatures
    draw.line([(180, 720), (420, 720)], fill=(148, 163, 184), width=2)
    draw.text((300, 745), "Authorized Signature", fill=(148, 163, 184), anchor="mm")

    draw.line([(width - 420, 720), (width - 180, 720)], fill=(148, 163, 184), width=2)
    draw.text((width - 300, 745), "Academic Director", fill=(148, 163, 184), anchor="mm")

    output_path = os.path.join(cert_dir, f"certificate{idx}.jpg")
    img.save(output_path, "JPEG", quality=90)
    print(f"Generated: {output_path}")

print("Certificate generation finished!")
