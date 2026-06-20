#!/usr/bin/env bash
# Generate all images for polyureainsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/polyureainsurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — POLYUREA COATING CONTRACTOR insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a professional polyurea coating contractor in full PPE including white Tyvek suit, respirator, and gloves, applying spray polyurea coating on an industrial concrete floor using a high-pressure spray gun, dramatic workshop lighting, industrial environment, professional commercial photography, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic elevated aerial view of an industrial facility with polyurea coating work in progress: workers in white protective suits applying spray coatings to large concrete containment areas and floors, industrial setting, professional photography, blue sky, no text" 4

gen "about.jpg" \
  "Photorealistic authentic portrait of a professional polyurea coating contractor in clean work gear standing confidently in front of a spray rig truck and equipment trailer, warm natural light, trustworthy professional expression, shallow depth of field, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic image of polyurea coating application in progress: a contractor in full PPE spraying elastomeric coating on an industrial surface, dramatic professional lighting, dark industrial background with teal and charcoal tones, premium commercial photography, clean, no text, no watermark" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic photo of a polyurea coating contractor in PPE discussing a project with a construction manager at an industrial job site, safety signs visible, professional safety equipment, commercial construction photography, no text" 4

gen "contractor-pollution-liability.jpg" \
  "Photorealistic photo of polyurea spray coating application with isocyanate chemical handling: a contractor in full respiratory protection and chemical-resistant PPE operating spray equipment near chemical drums, industrial safety environment, professional photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic photo of professional polyurea spray equipment: a Graco proportioner machine, heated hose system, and spray gun laid out in a clean industrial workshop, orange and stainless steel equipment, professional product photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic photo of polyurea coating crew workers in full PPE including respirators, Tyvek suits, and gloves, safely applying coatings in an industrial facility, bright professional photography, safety-focused, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of a professional polyurea coating contractor's spray rig: a heavy-duty pickup truck with a large enclosed white equipment trailer parked at an industrial job site, blue sky, clean professional commercial photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic photo of a large industrial commercial building construction project with coating work visible, cranes and scaffolding, professional project scale, clear sky, commercial construction photography, no text" 4

gen "applicator-liability.jpg" \
  "Photorealistic close-up photo of high-quality polyurea coating being applied to a concrete surface, showing the smooth elastomeric finish and spray application technique, professional macro photography, teal and grey industrial tones, no text" 4

gen "bonds.jpg" \
  "Photorealistic photo of a professional contractor reviewing contracts and project documents at a clean office desk, clipboard with project specifications, pen in hand, clean professional business photography, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
