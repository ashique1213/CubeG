import { SolvingStep } from '../cube/types';

export const SOLVING_STEPS: SolvingStep[] = [
  {
    id: 1,
    title: "Make the White Cross (The Daisy)",
    subtitle: "Step 1 of 10",
    orientation: "Keep Yellow Center on Top",
    instructions: [
      "Start with the yellow center piece facing directly UP.",
      "Bring all 4 white edge pieces to surround the yellow center.",
      "This forms a daisy flower shape: a yellow center with 4 white petals.",
      "Don't worry about the side colors yet—focus only on getting 4 white edges on top."
    ],
    algorithm: "F R U' R'",
    moves: ["F", "R", "U'", "R'"],
    diagramTitle: "What you should see on top:",
    diagramType: "daisy",
    tips: [
      "Yellow center stays on top throughout this entire step.",
      "If a white edge is in the middle layer, rotate the front face to bring it up.",
      "Rotate the top layer (U) if a spot is already occupied so you don't push out a solved petal."
    ]
  },
  {
    id: 2,
    title: "Move the White Cross to the Bottom",
    subtitle: "Step 2 of 10",
    orientation: "Keep Yellow on Top, White on Bottom",
    instructions: [
      "Look at the side color of each white petal on the top layer.",
      "Rotate the top layer (U) until the petal's side color matches its center.",
      "Once aligned (e.g., White-Red edge aligned with Red center), turn that face 180° (F2) to send it to the bottom.",
      "Repeat for all 4 edges: Red (F2), Green (R2), Orange (B2), and Blue (L2).",
      "You now have a true White Cross on the bottom with all side colors matching their centers!"
    ],
    algorithm: "F2 R2 B2 L2",
    moves: ["F2", "R2", "B2", "L2"],
    diagramTitle: "Bottom face with matching side centers:",
    diagramType: "bottom-cross",
    tips: [
      "Always check the side color before turning 180°.",
      "When done, flip the cube or look underneath: the white cross lines up with all 4 center colors."
    ]
  },
  {
    id: 3,
    title: "Solve the White Corners",
    subtitle: "Step 3 of 10",
    orientation: "Keep White Cross on Bottom, Yellow on Top",
    instructions: [
      "Keep the white cross on the bottom (Down).",
      "Find a corner piece in the top layer that has White on it.",
      "Position that corner directly above where it belongs (between matching center colors, e.g., White-Red-Green between White, Red, and Green centers).",
      "Hold the cube so the target slot is at the front-right, and perform the Right-Hand algorithm: R U R' U'."
    ],
    algorithm: "R U R' U'",
    moves: ["R", "U", "R'", "U'"],
    diagramTitle: "Completed First Layer:",
    diagramType: "corners",
    tips: [
      "This 4-move trigger is the most fundamental move in cubing: 'Up, Left, Down, Right'.",
      "Repeat the sequence 1 to 5 times until the white corner sits squarely in the bottom with colors matched."
    ]
  },
  {
    id: 4,
    title: "Middle Layer — Left",
    subtitle: "Step 4 of 10",
    orientation: "Keep White on Bottom, Yellow on Top",
    instructions: [
      "Find an edge piece on the top layer that DOES NOT have yellow on it.",
      "Match the front sticker of this edge with its center color (creating an upside-down 'T').",
      "Look at the top sticker: if that color matches the LEFT center, the edge needs to go to the LEFT.",
      "Execute the Middle Layer Left algorithm shown below."
    ],
    algorithm: "U' L' U L U F U' F'",
    moves: ["U'", "L'", "U", "L", "U", "F", "U'", "F'"],
    diagramTitle: "Target Edge Moving to the Left Slot:",
    diagramType: "middle-layer",
    tips: [
      "Notice the pattern: first move the piece AWAY from its goal (U'), do the left trigger (L' U L), then turn toward front and do the front trigger (U F U' F').",
      "Keep your grip firm with the matching center facing you."
    ]
  },
  {
    id: 5,
    title: "Middle Layer — Right",
    subtitle: "Step 5 of 10",
    orientation: "Keep White on Bottom, Yellow on Top",
    instructions: [
      "Find another edge piece on the top layer without yellow.",
      "Align its front color with the matching center.",
      "If the top color matches the RIGHT center, the edge needs to go to the RIGHT.",
      "Execute the Middle Layer Right algorithm to insert the edge smoothly."
    ],
    algorithm: "U R U' R' U' F' U F",
    moves: ["U", "R", "U'", "R'", "U'", "F'", "U", "F"],
    diagramTitle: "Target Edge Moving to the Right Slot:",
    diagramType: "middle-layer",
    tips: [
      "This is the mirror opposite of Step 4.",
      "Once all 4 middle edges are inserted, the first two layers (F2L) are completely solved!"
    ]
  },
  {
    id: 6,
    title: "Yellow Cross",
    subtitle: "Step 6 of 10",
    orientation: "Keep Yellow on Top",
    instructions: [
      "Look at the yellow pieces on the top face (ignore the corners for now).",
      "You will see one of 3 patterns: Dot, 'L' shape, or Horizontal Line.",
      "If you see an 'L', position it at the top-left (9 and 12 o'clock).",
      "If you see a Line, keep it horizontal (9 and 3 o'clock).",
      "Apply the algorithm: F U R U' R' F'. Repeat until you get the Yellow Cross!"
    ],
    algorithm: "F U R U' R' F'",
    moves: ["F", "U", "R", "U'", "R'", "F'"],
    diagramTitle: "Yellow Pattern Progression:",
    diagramType: "yellow-progression",
    tips: [
      "Mnemonic: 'FUR - URF prime' (F, then U R U' R', then F').",
      "Never rotate the cube during the algorithm; keep the front face facing you."
    ]
  },
  {
    id: 7,
    title: "Full Yellow Face — Fish Shape",
    subtitle: "Step 7 of 10",
    orientation: "Keep Yellow on Top (Fish nose pointing bottom-left)",
    instructions: [
      "Once the yellow cross is formed, observe the yellow corners.",
      "When exactly one corner is oriented, it creates a 'Fish' shape.",
      "Turn the top layer so the fish's nose (the yellow corner) points toward the BOTTOM-LEFT.",
      "Execute the Sune algorithm: R U R' U R U2 R'.",
      "The entire top face will turn completely yellow!"
    ],
    algorithm: "R U R' U R U2 R'",
    moves: ["R", "U", "R'", "U", "R", "U2", "R'"],
    diagramTitle: "Fish Shape pointing to Bottom-Left:",
    diagramType: "fish",
    tips: [
      "If you have 0 or 2 yellow corners, perform this algorithm once, re-orient the fish to bottom-left, and do it again.",
      "Watch how R and U dance together: Up, Left, Down, Left, Up, Double-turn, Down."
    ]
  },
  {
    id: 8,
    title: "Position Yellow Corners",
    subtitle: "Step 8 of 10",
    orientation: "Yellow on Top (Matching headlights at the Back)",
    instructions: [
      "Look at the corners of the top layer.",
      "Find two corners on the same side that share the same color (these are called 'Headlights').",
      "Rotate the top layer so the headlights match their center color and place them at the BACK (B face).",
      "If no headlights exist, do the algorithm once from any angle to create them.",
      "Execute the A-Perm algorithm to position all 4 corners."
    ],
    algorithm: "R' F R' B2 R F' R' B2 R2",
    moves: ["R'", "F", "R'", "B2", "R", "F'", "R'", "B2", "R2"],
    diagramTitle: "Headlights positioned at the Back:",
    diagramType: "headlights",
    tips: [
      "Headlights mean two corner stickers on the same face have the identical color.",
      "Notice B2 is a 180° rotation of the back face."
    ]
  },
  {
    id: 9,
    title: "Position Yellow Edges / Finish",
    subtitle: "Step 9 of 10",
    orientation: "Yellow on Top (Fully solved face placed at the Back)",
    instructions: [
      "All 4 corners are now in place. Only 3 or 4 edges need to swap.",
      "If one side is already completely solved, place that solved side at the BACK.",
      "Look at the remaining 3 edges: they need to cycle clockwise or counter-clockwise.",
      "Execute the final algorithm: R2 U R U R' U' R' U' R' U R'."
    ],
    algorithm: "R2 U R U R' U' R' U' R' U R'",
    moves: ["R2", "U", "R", "U", "R'", "U'", "R'", "U'", "R'", "U", "R'"],
    diagramTitle: "Cycling the 3 remaining edges:",
    diagramType: "edges",
    tips: [
      "If all 4 edges need swapping, execute this algorithm once to solve one side, put that side at the back, and do it one more time.",
      "Watch the layers lock into place as the last turn completes!"
    ]
  },
  {
    id: 10,
    title: "Cube Solved!",
    subtitle: "Step 10 of 10",
    orientation: "Any Orientation — Admire Your Work!",
    instructions: [
      "CONGRATULATIONS! You have successfully solved the 3×3 Rubik's Cube!",
      "You have mastered the foundational layer-by-layer method:",
      "1. Daisy → 2. White Cross → 3. First Layer Corners → 4 & 5. Middle Layer",
      "6. Yellow Cross → 7. Yellow Face → 8. Yellow Corners → 9. Yellow Edges!",
      "Click 'Solve Again' anytime to reset and practice each step until you can do it by heart."
    ],
    moves: [],
    diagramTitle: "Full Solved 3×3 Rubik's Cube",
    diagramType: "solved",
    tips: [
      "Repetition builds muscle memory: practice each trigger (R U R' U') 10 times a day.",
      "Show off your new superpower to family and friends!"
    ]
  }
];
