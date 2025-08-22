import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
  CommandGroup,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import {
  Activity,
  Baby,
  Bone,
  Brain,
  BriefcaseMedical,
  Dna,
  Droplet,
  Ear,
  Eye,
  HeartPlus,
  Mars,
  Smile,
  Sprout,
  Stethoscope,
  Venus,
  Wind,
} from "lucide-react";

const doctorsList = {
  "General & Primary Care": [
    {
      specialization: "General Physician",
      description: "Common illnesses, general health, checkups",
      icon: BriefcaseMedical,
      tags: [
        "fever",
        "cough",
        "cold",
        "headache",
        "infection",
        "general health",
        "checkup",
        "flu",
      ],
    },
    {
      specialization: "Pediatrician",
      description: "Child and infant care",
      icon: Baby,
      tags: [
        "child",
        "baby",
        "newborn",
        "infant",
        "vaccination",
        "growth",
        "fever",
      ],
    },
    {
      specialization: "Gynecologist",
      description: "Women’s health and reproductive care",
      icon: Venus,
      tags: [
        "pregnancy",
        "periods",
        "fertility",
        "women health",
        "woman",
        "uterus",
        "menstrual",
        "delivery",
      ],
    },
  ],
  "Internal Medicine & Chronic Care": [
    {
      specialization: "Cardiologist",
      description: "Heart and circulatory system",
      icon: HeartPlus,
      tags: [
        "heart",
        "chest pain",
        "blood pressure",
        "cholesterol",
        "palpitations",
        "cardiac",
      ],
    },

    {
      specialization: "Endocrinologist",
      description: "Hormonal and metabolic disorders",
      icon: Activity,
      tags: [
        "hormones",
        "thyroid",
        "diabetes",
        "obesity",
        "metabolism",
        "pituitary",
      ],
    },
    {
      specialization: "Nephrologist",
      description: "Kidney and urinary system",
      icon: Droplet,
      tags: ["kidney", "urine", "dialysis", "stones", "renal", "transplant"],
    },
    {
      specialization: "Gastroenterologist",
      description: "Digestive system",
      icon: Stethoscope,
      tags: [
        "stomach",
        "liver",
        "intestine",
        "digestion",
        "ulcer",
        "gas",
        "hepatitis",
      ],
    },
    {
      specialization: "Pulmonologist",
      description: "Respiratory system",
      icon: Wind,
      tags: [
        "lungs",
        "asthma",
        "tb",
        "breathing",
        "covid",
        "bronchitis",
        "respiratory",
      ],
    },
    {
      specialization: "Urologist",
      description: "Male reproductive and urinary tract",
      icon: Mars,
      tags: [
        "urine",
        "bladder",
        "prostate",
        "stones",
        "man",
        "men",
        "male fertility",
        "incontinence",
      ],
    },
  ],
  "Brain & Mental Health": [
    {
      specialization: "Neurologist",
      description: "Brain, nerves, stroke, seizures",
      icon: Brain,
      tags: [
        "brain",
        "nerves",
        "headache",
        "migraine",
        "stroke",
        "seizure",
        "memory",
      ],
    },

    {
      specialization: "Psychiatrist",
      description: "Mental health, mood disorders, sleep",
      icon: HeartPlus,
      tags: [
        "mental health",
        "depression",
        "anxiety",
        "stress",
        "schizophrenia",
        "bipolar",
        "sleep",
      ],
    },
  ],
  "Musculoskeletal & Movement": [
    {
      specialization: "Orthopedic",
      description: "Bones, joints, spine, injuries",
      icon: Bone,
      tags: [
        "bone",
        "joint",
        "fracture",
        "back pain",
        "knee",
        "shoulder",
        "arthritis",
        "spine",
      ],
    },
  ],
  "Sensory & Specialized Organs": [
    {
      specialization: "ENT Specialist",
      description: "Ear, nose, throat",
      icon: Ear,
      tags: ["ear", "nose", "throat", "hearing", "sinus", "tonsils", "voice"],
    },
    {
      specialization: "Ophthalmologist",
      description: "Eyes and vision",
      icon: Eye,
      tags: [
        "eye",
        "vision",
        "cataract",
        "glasses",
        "retina",
        "red eye",
        "surgery",
      ],
    },

    {
      specialization: "Dentist",
      description: "Teeth, gums, oral health",
      icon: Smile,
      tags: [
        "teeth",
        "cavity",
        "gum",
        "toothache",
        "braces",
        "wisdom tooth",
        "oral",
      ],
    },
  ],
  "Skin & External Appearance": [
    {
      specialization: "Dermatologist",
      description: "Skin, hair, nails, allergies",
      icon: Sprout,
      tags: [
        "skin",
        "acne",
        "rash",
        "eczema",
        "hair",
        "nails",
        "allergy",
        "psoriasis",
      ],
    },
  ],
  "Cancer & Advanced Care": [
    {
      specialization: "Oncologist",
      description: "Cancer diagnosis and treatment",
      icon: Dna,
      tags: [
        "cancer",
        "tumor",
        "chemotherapy",
        "radiation",
        "oncology",
        "lump",
        "screening",
      ],
    },
  ],
};

const DoctorList = ({className, onSelect}) => {
  return (
    <Command
      className={cn("rounded-lg border shadow-md md:min-w-[450px] h-max text-left", className)}
      filter={(value, search) => {
        return value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0;
      }}
    >
      <CommandInput className="h-11" placeholder="search by specialization or organ" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {Object.keys(doctorsList).map((group) => (
          <>
            <CommandGroup heading={group}>
              {doctorsList[group].map((item) => (
                <CommandItem
                  key={item.specialization}
                  value={`${item.specialization} ${item.description} ${item.tags.join(" ")}`}
                  className="cursor-pointer"
                  onSelect={()=> onSelect && onSelect(item)}
                >
                  <div className="bg-primary/10 size-10 rounded-full flex items-center justify-center">
                    <item.icon />
                  </div>
                  <div>
                    <h4>{item.specialization}</h4>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </>
        ))}
      </CommandList>
    </Command>
  );
};

export default DoctorList;
