import { SolvingStep } from '../cube/types';

export const SOLVING_STEPS: SolvingStep[] = [
  {
    id: 1,
    title: "Make the White Cross (The Daisy)",
    subtitle: "Step 1 of 9",
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
    subtitle: "Step 2 of 9",
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
    subtitle: "Step 3 of 9",
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
    title: "Solve the Middle Layer",
    subtitle: "Step 4 of 9",
    orientation: "Keep White on Bottom, Yellow on Top",
    instructions: [
      "Find an edge piece on the top layer that DOES NOT have yellow on it.",
      "Match the front sticker of this edge with its center color (creating an upside-down 'T').",
      "If top color matches LEFT center, execute Left algorithm: U' L' U L U F U' F'.",
      "If top color matches RIGHT center, execute Right algorithm: U R U' R' U' F' U F.",
      "Repeat for all 4 middle edges until the first two layers (F2L) are complete!"
    ],
    algorithm: "Left: U' L' U L U F U' F' | Right: U R U' R' U' F' U F",
    moves: ["U'", "L'", "U", "L", "U", "F", "U'", "F'", "U", "R", "U'", "R'", "U'", "F'", "U", "F"],
    diagramTitle: "Target Edge Moving to Middle Slot:",
    diagramType: "middle-layer",
    tips: [
      "First move the piece AWAY from its destination, do the side trigger, then turn toward front and do the front trigger.",
      "Left algorithm: U' L' U L U F U' F'  •  Right algorithm: U R U' R' U' F' U F."
    ]
  },
  {
    id: 5,
    title: "Yellow Cross",
    subtitle: "Step 5 of 9",
    orientation: "Keep Yellow on Top",
    instructions: [
      "Look at the yellow pieces on the top face (ignore the corners for now).",
      "You will see one of 3 patterns: Center Dot, 'L' shape, or Horizontal Line.",
      "If you see an 'L', position it at the top-left (9 and 12 o'clock).",
      "If you see a Line, keep it horizontal (9 and 3 o'clock).",
      "Apply the algorithm: F R U R' U' F'. Repeat until you get the Yellow Cross!"
    ],
    algorithm: "F R U R' U' F'",
    moves: ["F", "R", "U", "R'", "U'", "F'"],
    diagramTitle: "Yellow Pattern Progression & Move Sequence:",
    diagramType: "yellow-progression",
    tips: [
      "Formula: F, then Right-hand trigger (R U R' U'), then F'.",
      "Never rotate the cube during the algorithm; keep the front face facing you."
    ]
  },
  {
    id: 6,
    title: "Crossed Yellow Side Colour Matching",
    subtitle: "Step 6 of 9",
    orientation: "Keep Yellow on Top",
    instructions: [
      "After forming the yellow cross, check the side edge colors on the top layer.",
      "Rotate the top layer (U) to align as many side edge colors as possible with their adjacent center faces.",
      "Execute the top layer edge alignment algorithm: U R U R' U R U2 R'.",
      "Repeat until all 4 crossed yellow side colors match their center faces!"
    ],
    algorithm: "U R U R' U R U2 R'",
    moves: ["U", "R", "U", "R'", "U", "R", "U2", "R'"],
    diagramTitle: "Crossed Yellow Side Edge Alignment:",
    diagramType: "side-matching",
    tips: [
      "Not yellow face fishshape — this step aligns crossed yellow side colors.",
      "Algorithm sequence: Top layer U, then Right Up, Top Left, Right Down, Top Left, Right Up, Top Double Turn (U2), Right Down."
    ]
  },
  {
    id: 7,
    title: "Corner Setting (Matching Corner Color)",
    subtitle: "Step 7 of 9",
    orientation: "Keep Yellow on Top (Matching Corner at Front-Right)",
    instructions: [
      "Look at the 4 top layer corners to find any corner piece that is in its correct place (matching adjacent center colors).",
      "Position that matching corner at the Top Front-Right position.",
      "If no corner matches, perform the algorithm once from any angle to get a matching corner.",
      "Execute the corner setting algorithm: U R U' L' U R' U' L.",
      "Repeat until all 4 top layer corners are in their matching corner locations."
    ],
    algorithm: "U R U' L' U R' U' L",
    moves: ["U", "R", "U'", "L'", "U", "R'", "U'", "L"],
    diagramTitle: "Top Layer Corner Setting:",
    diagramType: "corner-matching",
    tips: [
      "Corner setting matches corner colors on the top layer.",
      "Algorithm: U, R, U', L', U, R', U', L."
    ]
  },
  {
    id: 8,
    title: "Orienting Yellow Corners (R' B' R B)",
    subtitle: "Step 8 of 9",
    orientation: "Keep Yellow on Top (Unsolved Corner at Front-Right)",
    instructions: [
      "Hold the cube with Yellow on top and place an unsolved corner at the Front-Right position.",
      "Execute the 4-move corner orientation algorithm: R' B' R B.",
      "R' = Right down, B' = Bottom to left, R = Right up, B = Bottom to right.",
      "Repeat R' B' R B (usually 2 or 4 times) until the yellow sticker of that front-right corner faces directly UP.",
      "Rotate ONLY the top layer (U) to bring the next unsolved corner to the front-right position, then repeat R' B' R B."
    ],
    algorithm: "R' B' R B",
    moves: ["R'", "B'", "R", "B", "R'", "B'", "R", "B"],
    diagramTitle: "Setting Corner Yellow:",
    diagramType: "yellow-corners",
    tips: [
      "R' (Right down), B' (Bottom to left), R (Right up), B (Bottom to right).",
      "CRITICAL: Do NOT rotate the full cube between corners—turn ONLY the top layer (U) to bring the next corner to the front-right!"
    ]
  },
  {
    id: 9,
    title: "Final Stage: Top Yellow Solved & Cube Complete!",
    subtitle: "Step 9 of 9",
    orientation: "All Faces Solved — Congratulations!",
    instructions: [
      "Once all yellow corners face UP, turn the top layer (U) to align the top layer colors with their matching side centers.",
      "Correspondingly, the entire 3×3 Rubik's Cube will be completely solved!",
      "CONGRATULATIONS! You have successfully mastered the complete Rubik's Cube solving method!"
    ],
    moves: [],
    diagramTitle: "Entire Cube Solved!",
    diagramType: "solved",
    tips: [
      "Mastered 9 Steps: 1. Daisy → 2. White Cross → 3. White Corners → 4. Middle Layer → 5. Yellow Cross → 6. Side Matching → 7. Corner Setting → 8. R' B' R B → 9. Solved Cube!",
      "Click 'Solve Again' anytime to practice each step until you can solve it by heart!"
    ]
  }
];

