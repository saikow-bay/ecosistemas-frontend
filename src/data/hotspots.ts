export interface Chapter {
  id: number;
  title: string;
  x: number;
  y: number;
  color: string;
  excerpt: string;
  cover: string;
  summary: string;
  concepts: string[];
  activity: string[];
  kpis: { label: string; value: string; type: 'ecology' | 'energy' | 'conservation' }[];
}

export interface Ecosystem {
  name: string;
  image: string;
  description: string;
}

export const ECOSYSTEM: Ecosystem = {
  name: "Tropical Rainforest",
  image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
  description: "Explore the complex layers of biodiversity, energy flow, and ecological relationships in Earth's most vibrant ecosystem."
};

export const CHAPTERS: Chapter[] = [
  {
    id: 0,
    title: "0 · Ecosistemas",
    x: 15,
    y: 75,
    color: "#6b4423",
    excerpt: "Understanding the soil systems and root networks that support the rainforest's incredible biodiversity.",
    cover: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
    summary: "The rainforest foundation lies in its complex soil ecosystem and extensive root networks. Despite nutrient-poor soils, intricate mycorrhizal relationships and rapid nutrient cycling create the base for Earth's most biodiverse terrestrial ecosystem.",
    concepts: [
      "Mycorrhizal fungi form symbiotic networks with tree roots",
      "Rapid nutrient cycling prevents soil nutrient accumulation", 
      "Root systems extend horizontally rather than deeply",
      "Decomposer organisms quickly break down organic matter",
      "Soil pH varies significantly across different forest areas"
    ],
    activity: [
      "Collect soil samples from different forest areas",
      "Examine root structures under magnification",
      "Map the distribution of fungi networks",
      "Test soil pH and nutrient levels",
      "Document decomposer species found in leaf litter"
    ],
    kpis: [
      { label: "Soil Biodiversity", value: "High", type: "ecology" },
      { label: "Nutrient Cycling", value: "Rapid", type: "energy" },
      { label: "Root Protection", value: "Critical", type: "conservation" }
    ]
  },
  {
    id: 1,
    title: "1 · Organismos fotosintéticos",
    x: 35,
    y: 85,
    color: "#2f6d3b",
    excerpt: "Discovering the hidden world of shade-adapted plants and the intricate web of life in the forest's lower levels.",
    cover: "https://images.pexels.com/photos/1430931/pexels-photo-1430931.jpeg",
    summary: "The understory represents a twilight world where plants have evolved remarkable adaptations to thrive in low-light conditions. This layer hosts specialized communities of insects, amphibians, and small mammals in a complex ecological network.",
    concepts: [
      "Shade-tolerant plants maximize light capture efficiency",
      "Epiphytes create aerial gardens on tree trunks", 
      "Many species exhibit specialized pollination strategies",
      "Sound travels differently in dense understory vegetation",
      "Temperature and humidity remain remarkably stable"
    ],
    activity: [
      "Measure light levels at different understory depths",
      "Identify epiphytic plant species on tree trunks",
      "Record understory bird and insect sounds",
      "Map temperature and humidity gradients",
      "Photograph understory plant adaptations"
    ],
    kpis: [
      { label: "Plant Diversity", value: "Very High", type: "ecology" },
      { label: "Light Efficiency", value: "Optimized", type: "energy" },
      { label: "Habitat Stability", value: "Vulnerable", type: "conservation" }
    ]
  },
  {
    id: 2,
    title: "2 · Fotosintesis y Cambio Climatico",
    x: 60,
    y: 45,
    color: "#4caf50",
    excerpt: "Exploring the aerial pathways and vertical ecosystems that connect the rainforest's upper reaches.",
    cover: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
    summary: "The rainforest canopy forms a complex three-dimensional habitat with its own climate, food webs, and specialized species. This aerial world supports more biodiversity per square meter than almost any other ecosystem on Earth.",
    concepts: [
      "Canopy layers create distinct microhabitats",
      "Lianas and climbing plants form living bridges", 
      "Many animals spend entire lives without touching ground",
      "Canopy gaps drive forest regeneration cycles",
      "Wind patterns create unique dispersal corridors"
    ],
    activity: [
      "Map canopy connectivity using observation points",
      "Identify different types of climbing strategies",
      "Document animals using canopy highways",
      "Measure wind patterns at different heights",
      "Track seed dispersal routes through canopy gaps"
    ],
    kpis: [
      { label: "Connectivity", value: "Extensive", type: "ecology" },
      { label: "Solar Access", value: "Maximum", type: "energy" },
      { label: "Fragmentation Risk", value: "High", type: "conservation" }
    ]
  },
  {
    id: 3,
    title: "3 · Fotosintesis y Respiracion Celular",
    x: 25,
    y: 30,
    color: "#4caf50",
    excerpt: "Following water's journey from cloud to canopy to soil, driving the forest's circulatory system.",
    cover: "https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg",
    summary: "Water shapes every aspect of rainforest ecology, from the microscopic to the landscape scale. The forest both depends on and creates its own rainfall through complex evapotranspiration processes that regulate regional climate patterns.",
    concepts: [
      "Evapotranspiration creates local rainfall patterns",
      "Trees act as biological water pumps and filters", 
      "Stream networks drain excess water efficiently",
      "Fog capture supplements rainfall in some areas",
      "Water availability influences plant distribution"
    ],
    activity: [
      "Measure rainfall at different canopy levels",
      "Track water movement through tree transpiration",
      "Map stream networks and watershed boundaries",
      "Study fog formation and collection processes",
      "Monitor soil moisture content variations"
    ],
    kpis: [
      { label: "Water Recycling", value: "65%", type: "ecology" },
      { label: "Hydrologic Flow", value: "Balanced", type: "energy" },
      { label: "Watershed Health", value: "Stable", type: "conservation" }
    ]
  },
  {
    id: 4,
    title: "4 · Proximamente",
    x: 70,
    y: 70,
    color: "#d4a017",
    excerpt: "Mapping the complex food webs and predator-prey relationships that maintain ecological balance.",
    cover: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg",
    summary: "Rainforest predator networks demonstrate nature's most complex food webs, where energy flows through multiple trophic levels. From tiny invertebrate predators to apex species, each plays a crucial role in maintaining ecosystem stability.",
    concepts: [
      "Trophic cascades regulate herbivore populations",
      "Many species occupy multiple trophic levels", 
      "Predator specialization reduces competition",
      "Temporal hunting patterns minimize conflicts",
      "Keystone predators disproportionately impact ecosystems"
    ],
    activity: [
      "Map predator territories using tracking data",
      "Document hunting strategies and timing",
      "Analyze prey species abundance patterns",
      "Study predator-prey behavioral adaptations",
      "Monitor population dynamics over time"
    ],
    kpis: [
      { label: "Trophic Levels", value: "6+", type: "ecology" },
      { label: "Energy Transfer", value: "Efficient", type: "energy" },
      { label: "Population Status", value: "Declining", type: "conservation" }
    ]
  },
  {
    id: 5,
    title: "5 · Proximamente",
    x: 85,
    y: 25,
    color: "#6b4423",
    excerpt: "Examining how human activities reshape forest ecosystems and the urgent need for conservation action.",
    cover: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
    summary: "Human activities have dramatically altered rainforest ecosystems through deforestation, fragmentation, and climate change. Understanding these impacts is crucial for developing effective conservation strategies and sustainable management practices.",
    concepts: [
      "Edge effects alter forest interior conditions",
      "Fragmentation isolates animal populations", 
      "Agricultural expansion drives habitat loss",
      "Climate change shifts species distributions",
      "Indigenous management practices show sustainable alternatives"
    ],
    activity: [
      "Compare satellite images showing deforestation over time",
      "Measure edge effects on forest microclimate",
      "Document species changes in fragmented areas",
      "Map current threats to forest integrity",
      "Research indigenous conservation success stories"
    ],
    kpis: [
      { label: "Forest Cover", value: "-2% annually", type: "ecology" },
      { label: "Carbon Release", value: "Increasing", type: "energy" },
      { label: "Protection Status", value: "Expanding", type: "conservation" }
    ]
  },
  {
    id: 6,
    title: "6 · Proximamente",
    x: 50,
    y: 15,
    color: "#d4a017",
    excerpt: "Envisioning sustainable solutions and restoration strategies for rainforest conservation and recovery.",
    cover: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
    summary: "The future of rainforests depends on innovative conservation approaches, restoration technologies, and global cooperation. From rewilding projects to sustainable development models, multiple pathways exist for forest recovery and protection.",
    concepts: [
      "Ecological restoration can recreate forest ecosystems",
      "Payment for ecosystem services incentivizes conservation", 
      "Technology enables better monitoring and protection",
      "Community-based conservation shows promising results",
      "International cooperation is essential for success"
    ],
    activity: [
      "Design a restoration plan for degraded forest area",
      "Calculate ecosystem service values",
      "Research innovative conservation technologies",
      "Study successful community conservation programs",
      "Develop a personal action plan for forest protection"
    ],
    kpis: [
      { label: "Restoration Potential", value: "High", type: "ecology" },
      { label: "Investment Flow", value: "Growing", type: "energy" },
      { label: "Global Commitment", value: "Strengthening", type: "conservation" }
    ]
  }
];