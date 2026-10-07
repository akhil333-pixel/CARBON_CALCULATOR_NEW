import React from 'react'
import { useState } from 'react'

/* ───────────────────────── UI-only icons ───────────────────────── */

const IconVehicle = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 13 6.4 7.9A2 2 0 0 1 8.3 6.5h7.4a2 2 0 0 1 1.9 1.4L19.5 13" />
        <rect x="2.8" y="13" width="18.4" height="5.4" rx="1.8" />
        <circle cx="7.2" cy="18.4" r="1.6" />
        <circle cx="16.8" cy="18.4" r="1.6" />
    </svg>
)

const IconFood = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 11.5h17a8.5 8.5 0 0 1-17 0Z" />
        <path d="M2.5 11.5h19" />
        <path d="M9.5 8.2c0-1.6 1.4-1.8 1.4-3.4M14 8.2c0-1.6 1.4-1.8 1.4-3.4" />
    </svg>
)

const IconElectricity = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.6 2 4.8 13.4h5.6L9.4 22l9.4-11.9h-5.7L13.6 2Z" />
    </svg>
)

const IconFuel = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16" />
        <path d="M2.5 21h12" />
        <path d="M4.5 9.5h8" />
        <path d="M13 9h3.5a2 2 0 0 1 2 2v4.6a1.75 1.75 0 0 0 3.5 0V8.2a1.8 1.8 0 0 0-.6-1.4L18.5 5" />
    </svg>
)

const IconFlight = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m3 12 18-8-6.5 17-3.5-7-8-2Z" />
        <path d="m11 14 4-4" />
    </svg>
)

const IconWork = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" />
    </svg>
)

const IconClock = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
    </svg>
)

const IconArrow = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
)

const IconCheck = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 12.5 9.5 18 20 6.5" />
    </svg>
)

const IconTrash = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 7h16m-10 4v6m4-6v6M5 7l1 14h12l1-14M9 7V4h6v3" />
    </svg>
)

const IconChevrons = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m8 9 4-4 4 4" />
        <path d="m8 15 4 4 4-4" />
    </svg>
)

const DropMark = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.4c3.5 4.4 7.2 8.4 7.2 11.9a7.2 7.2 0 1 1-14.4 0C4.8 10.8 8.5 6.8 12 2.4Z" fill="#57B35A" />
        <path d="M12 8.4c1.9 2.5 3.4 4.6 3.4 6.3a3.4 3.4 0 0 1-6.8 0c0-1.7 1.5-3.8 3.4-6.3Z" fill="#2E7D32" opacity="0.55" />
    </svg>
)

const CATEGORY_ICONS = {
    VEHICLE: IconVehicle,
    FOOD: IconFood,
    ELECTRICITY: IconElectricity,
    FUEL: IconFuel,
    FLIGHT: IconFlight,
}

/* ───────────── decorative plant artwork (photo 1) ───────────── */

const prettyName = (value) => value.charAt(0) + value.slice(1).toLowerCase()

const Calculator = ({ onBack }) => {
    const [frequently, setfrequently] = useState([
    {
        key: 0,

        value: "VEHICLE",

        elements: {

            strings: [
                "TWO_WHEELER",
                "CAR",
                "TRUCK"
            ],

            data: {
                TWO_WHEELER: 0.028,
                CAR: 0.164,
                TRUCK: 0.800
            }

        },

        often_use: ["daily", "weekly", "monthly"],

        unit: "km"
    },


    {
        key: 1,

        value: "FOOD",

        elements: {

            strings: [
                "VEG",
                "NON_VEG"
            ],

            data: {
                VEG: 0.6,
                NON_VEG: 2.0
            }

        },

        often_use: ["daily", "weekly", "monthly"],

        unit: "meal"
    },


    {
        key: 2,

        value: "ELECTRICITY",

        elements: {

            strings: [
                "AC",
                "FAN",
                "FRIDGE",
                "TV"
            ],

            data: {
                AC: 1.24,
                FAN: 0.041,
                FRIDGE: 0.083,
                TV: 0.083
            }

        },

        often_use: ["daily", "weekly", "monthly"],

        unit: "hour"
    },


    {
        key: 3,

        value: "FUEL",

        elements: {

            strings: [
                "LPG",
                "CNG",
                "PNG",
                "COAL"
            ],

            data: {
                LPG: 3.00,
                CNG: 2.69,
                PNG: 2.75,
                COAL: 2.42
            }

        },

        often_use: ["daily", "weekly", "monthly"],

        unit: "kg"

    }

]);



const notfrequent = [
    {
        key: 0,
        value: "FLIGHT",
        elements: {
            strings: [
                "DOMESTIC",
                "INTERNATIONAL"
            ],
            data: {
                DOMESTIC: 90,
                INTERNATIONAL: 120
            }
        },
        often_use: ["daily", "weekly", "monthly"],
        unit: "hour"
    }
];


const workFields = [

    {
        key: 0,
        value: "Desk Work",
        elements: {
            strings: [
                "LAPTOP",
                "DESKTOP"
            ],
            data: {
                LAPTOP: 0.05,
                DESKTOP: 0.15
            }
        },
        unit: "hour"
    },

    {
        key: 1,
        value: "Education",
        elements: {
            strings: [
                "PROJECTOR",
                "PRINTING"
            ],
            data: {
                PROJECTOR: 0.30,
                PRINTING: 0.005
            }
        },
        unit: "hour/page"
    },

    {
        key: 2,
        value: "Healthcare",
        elements: {
            strings: [
                "MEDICAL_EQUIPMENT",
                "STERILIZATION"
            ],
            data: {
                MEDICAL_EQUIPMENT: 0.50,
                STERILIZATION: 0.80
            }
        },
        unit: "hour"
    },

    {
        key: 3,
        value: "Hospitality",
        elements: {
            strings: [
                "REFRIGERATION",
                "KITCHEN_EQUIPMENT"
            ],
            data: {
                REFRIGERATION: 1.00,
                KITCHEN_EQUIPMENT: 1.50
            }
        },
        unit: "hour"
    },

    {
        key: 4,
        value: "Transport",
        elements: {
            strings: [
                "DELIVERY_DISTANCE",
                "IDLE_TIME"
            ],
            data: {
                DELIVERY_DISTANCE: 0.164,
                IDLE_TIME: 0.80
            }
        },
        unit: "km/hour"
    },

    {
        key: 5,
        value: "Marine",
        elements: {
            strings: [
                "MARINE_FUEL"
            ],
            data: {
                MARINE_FUEL: 3.17
            }
        },
        unit: "kg"
    },

    {
        key: 6,
        value: "Industrial",
        elements: {
            strings: [
                "MACHINERY",
                "GENERATOR"
            ],
            data: {
                MACHINERY: 5.00,
                GENERATOR: 2.64
            }
        },
        unit: "hour"
    },

    {
        key: 7,
        value: "Construction",
        elements: {
            strings: [
                "HEAVY_MACHINERY",
                "CEMENT"
            ],
            data: {
                HEAVY_MACHINERY: 5.00,
                CEMENT: 0.90
            }
        },
        unit: "hour/kg"
    },

    {
        key: 8,
        value: "Farming",
        elements: {
            strings: [
                "TRACTOR",
                "FERTILIZER"
            ],
            data: {
                TRACTOR: 2.64,
                FERTILIZER: 1.50
            }
        },
        unit: "hour/kg"
    },

    {
        key: 9,
        value: "Household",
        elements: {
            strings: [
                "WATER_HEATING",
                "LAUNDRY"
            ],
            data: {
                WATER_HEATING: 1.00,
                LAUNDRY: 0.50
            }
        },
        unit: "hour/cycle"
    },

    {
        key: 10,
        value: "Business",
        elements: {
            strings: [
                "OFFICE_EQUIPMENT",
                "PRINTING"
            ],
            data: {
                OFFICE_EQUIPMENT: 0.15,
                PRINTING: 0.005
            }
        },
        unit: "hour/page"
    },

    {
        key: 11,
        value: "Student",
        elements: {
            strings: [
                "LAPTOP",
                "PRINTING"
            ],
            data: {
                LAPTOP: 0.05,
                PRINTING: 0.005
            }
        },
        unit: "hour/page"
    },

    {
        key: 12,
        value: "Other",
        elements: {
            strings: [
                "EQUIPMENT_USE"
            ],
            data: {
                EQUIPMENT_USE: 0.15
            }
        },
        unit: "hour"
    }

];


    const work = localStorage.getItem("work") || '';
    const selectedWorkField = workFields.find((item) => item.value === work);
    const [coeff, setcoeff] = useState('');
    const [show, setshow] = useState(true);
    const [show2, setshow2] = useState(true);
    const[vehicleval,setvehicleval] = useState('');
    const[foodval,setfoodval] = useState('');
    const[electricityval,setelectricityval] = useState('');
    const[fuelval,setfuelval] = useState('');
    const [val, setval] = useState('');
    // presentation-only: which category tab panel is visible
    const [activecat, setactivecat] = useState(0);
    const [activeMode, setActiveMode] = useState('frequently');
    // save → submit flow: chosen usage frequency, saved entries, batch result
    const [freq, setfreq] = useState('');
    const [elem, setelem] = useState('');        // selected element label (CAR, AC, LPG…)
    const [saved, setsaved] = useState(() => {
        try {
            const raw = localStorage.getItem('saved_entries');
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });
    const [result, setresult] = useState(null);   // batch result across ALL saved entries
    const [errmsg, seterrmsg] = useState('');     // per-form validation message
    const [finalmsg, setfinalmsg] = useState(''); // final submit message

    const formItems = activeMode === 'work'
        ? selectedWorkField
            ? [{ ...selectedWorkField, often_use: ['daily', 'weekly', 'monthly'] }]
            : []
        : activeMode === 'notfrequent'
            ? notfrequent
            : frequently;
    const visibleCategories = activeMode === 'frequently'
        ? frequently
        : activeMode === 'notfrequent'
            ? notfrequent
            : selectedWorkField
                ? [selectedWorkField]
                : [];

    // keep saved entries in localStorage so nothing is lost on refresh
    const persistSaved = (next) => {
        setsaved(next);
        try {
            localStorage.setItem('saved_entries', JSON.stringify(next));
        } catch {
            // storage unavailable — state still holds the entries
        }
    };

    // one click → calculate every saved entry together
    const submitAll = () => {
        if (saved.length === 0) {
            setfinalmsg("NOTHING SAVED YET — SAVE AT LEAST ONE ENTRY FIRST");
            console.log("SUBMIT ALL: no saved entries");
            return;
        }

        const round = (n) => Math.round(n * 100) / 100;
        let totalDaily = 0;
        let totalMonthly = 0;
        let totalYearly = 0;

        const entries = saved.map((e) => {
            const perPeriod = e.amount * e.factor;
            let daily;
            if (e.freq === "weekly") daily = perPeriod / 7;
            else if (e.freq === "monthly") daily = perPeriod / 30;
            else daily = perPeriod; // "daily"

            const monthly = daily * 30;
            const yearly = daily * 365;

            totalDaily += daily;
            totalMonthly += monthly;
            totalYearly += yearly;

            return { ...e, daily: round(daily), monthly: round(monthly), yearly: round(yearly) };
        });

        const summary = {
            entries,
            count: entries.length,
            daily: round(totalDaily),
            monthly: round(totalMonthly),
            yearly: round(totalYearly)
        };

        setresult(summary);
        setfinalmsg("");

        // print every entry + all three aspects of the total
        console.log("========== TOTAL CARBON FOOTPRINT — " + summary.count + " saved entries (kg CO2) ==========");
        entries.forEach((e) => {
            console.log(
                e.category + " / " + e.elem + " (" + e.amount + " " + e.unit + " " + e.freq + ")" +
                " -> daily " + e.daily + " | monthly " + e.monthly + " | yearly " + e.yearly
            );
        });
        console.log("TOTAL DAILY   : " + summary.daily + " kg CO2");
        console.log("TOTAL MONTHLY : " + summary.monthly + " kg CO2");
        console.log("TOTAL YEARLY  : " + summary.yearly + " kg CO2");
    };

    const clearAll = () => {
        persistSaved([]);
        setresult(null);
        setfinalmsg("");
        console.log("All saved entries cleared");
    };

    const removeEntry = (id) => {
        persistSaved(saved.filter((entry) => entry.id !== id));
        setresult(null);
        setfinalmsg('');
    };




    return (
    <div className="min-h-screen w-full bg-white p-0 sm:p-4">
        <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col overflow-hidden rounded-[26px] border-2 border-[#3E8E41] bg-gradient-to-b from-[#F3FAF1] via-white to-[#F3FAF1] sm:min-h-[calc(100vh-2rem)]">

            {/* ───────────────── header (photo 1) ───────────────── */}
            <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#CBE5C6] px-5 py-4 sm:px-10 sm:py-5">
                <div className="flex items-center text-[26px] font-extrabold leading-none tracking-tight">
                    <span className="text-[#2E7D32]">green</span>
                    <span className="text-[#57B35A]">Dr</span>
                    <DropMark className="h-[25px] w-[25px]" />
                    <span className="text-[#57B35A]">p</span>
                </div>

                <button
                    type="button"
                    onClick={onBack}
                    className="flex items-center gap-2 rounded-full border border-[#CBE5C6] bg-white px-5 py-2.5 text-sm font-semibold text-[#2E7D32] shadow-sm transition hover:bg-[#F3FAF1]"
                >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 12H5m7 7-7-7 7-7" />
                    </svg>
                    Back to profile
                </button>
            </header>

            {/* ───────────────── calculator ───────────────── */}

            
            <section className="flex flex-1 flex-col px-5 pb-14 pt-2 sm:px-10">
                <div className="mx-auto mt-7 w-full max-w-[1080px]">
                    <h1 className="border-l-4 border-[#57B35A] pl-4 text-left text-[26px] font-extrabold tracking-wide text-[#2E7D32] sm:text-3xl">CALCULATOR</h1>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-14">
                    <button
                        type="button"
                        className={`flex items-center gap-2 border-b-2 pb-1 text-[15px] font-semibold tracking-wide ${activeMode === 'frequently' ? 'border-[#2E7D32] text-[#2E7D32]' : 'border-transparent text-gray-400'}`}
                        onClick={() => {
                            setshow(true);
                            setshow2(true);
                            setActiveMode('frequently');
                        }}>
                        <IconClock className="h-5 w-5" />
                        FREQUENTLY
                    </button>

                    <button
                        type="button"
                        className={`flex items-center gap-2 border-b-2 pb-1 text-[15px] font-semibold tracking-wide ${activeMode === 'notfrequent' ? 'border-[#2E7D32] text-[#2E7D32]' : 'border-transparent text-gray-400'}`}
                        onClick={() => {
                            setshow(true);
                            setshow2(true);
                            setactivecat(0);
                            setActiveMode('notfrequent');
                            setelem('');
                            setval('');
                            setfreq('');
                            setcoeff('');
                            setresult(null);
                            seterrmsg('');
                        }}>
                        <IconFlight className="h-5 w-5" />
                        NOT FREQUENTLY
                    </button>
                    <button
                        type="button"
                        className={`flex items-center gap-2 border-b-2 pb-1 text-[15px] font-semibold tracking-wide ${activeMode === 'work' ? 'border-[#2E7D32] text-[#2E7D32]' : 'border-transparent text-gray-400'}`}
                        onClick={() => {
                            setshow(true);
                            setshow2(true);
                            setActiveMode('work');
                            setelem('');
                            setval('');
                            setfreq('');
                            setcoeff('');
                            setresult(null);
                            seterrmsg('');
                        }}>
                        <IconWork className="h-5 w-5" />
                        WORK RELATED{work ? ` · ${work.toUpperCase()}` : ''}
                    </button>
                </div>

                {
                    show && (
                        <>
                            {/* category tab bar (photo 2) */}
                            {activeMode && <div className="mt-8 flex flex-wrap items-stretch justify-center gap-1 border-b border-gray-200 sm:gap-3">
                                {
                                    visibleCategories.map((item) => {
                                        const active = activeMode === 'work' || item.key === activecat;
                                        const CategoryIcon = activeMode === 'work' ? IconWork : CATEGORY_ICONS[item.value];
                                        return (
                                            <button
                                                key={item.key}
                                                type="button"
                                                onClick={() => {
                                                    setactivecat(item.key);
                                                    setelem('');
                                                    setval('');
                                                    setfreq('');
                                                    setcoeff('');
                                                    setshow2(true);
                                                    setresult(null);
                                                    seterrmsg('');
                                                }}
                                                className="group relative px-2 pb-3 pt-2 transition sm:px-3">
                                                <span className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[15px] font-semibold transition ${active ? 'bg-[#EFF1F3] text-gray-900' : 'text-gray-600 group-hover:bg-gray-50 group-hover:text-gray-900'}`}>
                                                    <CategoryIcon className={`h-5 w-5 ${active ? 'text-gray-900' : 'text-gray-500'}`} />
                                                    {item.value}
                                                </span>
                                                <span className={`absolute inset-x-2 bottom-0 h-[3px] rounded-full transition ${active ? 'bg-gray-900' : 'bg-transparent'}`} />
                                            </button>
                                        );
                                    })
                                }
                            </div>}

                            {activeMode === 'work' && !selectedWorkField && (
                                <p className="mx-auto mt-8 max-w-[640px] text-center text-sm font-medium text-gray-500">
                                    No work category is saved for this profile. Select a work category from the signup screen first.
                                </p>
                            )}

                            {/* form rows (photo 2) */}
                            <div className="mx-auto mt-9 grid w-full max-w-[640px] grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-[minmax(0,1fr)_340px] sm:gap-y-7">
                                {
                                    formItems.map((item) => {
                                        console.log(item.value);

                                        if (activeMode === 'frequently' && item.key !== activecat) return null;

                                        const pretty = prettyName(item.value);

                                        return (
                                            <React.Fragment key={item.key}>

                                                {/* element select */}
                                                <div className="self-center text-left text-[17px] font-medium leading-snug text-[#2E7D32] sm:text-right">
                                                    {activeMode === 'work' ? 'Activity Type' : `${pretty} Type`}
                                                    <span className="text-red-500">*</span>
                                                </div>
                                                <div className="relative">
                                                    <select
                                                        value={elem}
                                                        className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-4 pr-10 text-[15px] text-gray-700 shadow-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
                                                        onChange={(dets) => {
                                                            let value = dets.target.value;
                                                            let data = item.elements.data[value];
                                                            console.log(value);
                                                            console.log(data);
                                                            setcoeff(data);
                                                            setelem(value);
                                                        }}>

                                                        <option value="">{`Choose ${pretty} Type`}</option>

                                                        {
                                                            show2 &&
                                                            item.elements.strings.map((element) => {
                                                                return (
                                                                    <option key={element} value={element}>
                                                                        {element}
                                                                    </option>

                                                                )
                                                            })
                                                        }
                                                    </select>
                                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                                        <IconChevrons className="h-4 w-4" />
                                                    </span>
                                                </div>

                                                {/* frequency select */}
                                                <div className="self-center text-left text-[17px] font-medium leading-snug text-[#2E7D32] sm:text-right">
                                                    {item.value === "FOOD" ? "How Often Do You Eat" : "Frequency"}
                                                    <span className="text-red-500">*</span>
                                                </div>
                                                <div className="relative">
                                                    <select
                                                        value={freq}
                                                        className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-4 pr-10 text-[15px] text-gray-700 shadow-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
                                                        onChange={(dets) => {
                                                            let value = dets.target.value;
                                                            console.log(value);
                                                            console.log("hello");
                                                            setfreq(value);
                                                        }}>
                                                        <option value="">Choose Frequency</option>
                                                        {
                                                            show2
                                                            && item.often_use.map((freq) => {
                                                                return (
                                                                    <option key={freq} value={freq}>
                                                                        {freq}
                                                                    </option>

                                                                )
                                                            })
                                                        }
                                                    </select>
                                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                                        <IconChevrons className="h-4 w-4" />
                                                    </span>
                                                </div>

                                                {/* amount input */}
                                                {
                                                    show2 &&
                                                    <>
                                                        <div className="self-center text-left text-[17px] font-medium leading-snug text-[#2E7D32] sm:text-right">
                                                            Amount Consumed
                                                            <span className="text-red-500">*</span>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="number"
                                                                min="0"
                                                                step="any"
                                                                value={val}
                                                                placeholder={`Enter ${item.unit}`}
                                                                onChange={(dets) => {
                                                                    let value = dets.target.value;
                                                                    setval(value);

                                                                }}
                                                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-gray-700 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20" />
                                                        </div>
                                                    </>
                                                }

                                                {/* save current inputs for the final batch submit */}
                                                <div className="flex justify-center pt-2 sm:col-span-2">
                                                    <button
                                                        className="flex items-center gap-3 rounded-full bg-[#2E7D32] px-8 py-3 text-[15px] font-semibold text-white shadow-md transition hover:bg-[#256328]"
                                                        onClick={() => {
                                                            const amount = parseFloat(val);
                                                            const factor = parseFloat(coeff);

                                                            if (!elem || !freq || !amount || amount <= 0 || !factor) {
                                                                seterrmsg("SELECT TYPE & FREQUENCY AND ENTER A VALID AMOUNT");
                                                                console.log("SAVE: incomplete form, nothing saved");
                                                                return;
                                                            }

                                                            const entry = {
                                                                id: Date.now() + "-" + saved.length,
                                                                category: item.value,
                                                                elem: elem,
                                                                freq: freq,
                                                                amount: amount,
                                                                factor: factor,
                                                                unit: item.unit
                                                            };

                                                            const next = [...saved, entry];
                                                            persistSaved(next);

                                                            console.log("SAVED:", entry.category, "/", entry.elem, "-", entry.amount, entry.unit, entry.freq, "(factor " + entry.factor + ")");
                                                            console.log("TOTAL SAVED ENTRIES:", next.length);

                                                            // clear the form so the next entry starts fresh
                                                            setelem('');
                                                            setval('');
                                                            setfreq('');
                                                            setcoeff('');
                                                            setresult(null);
                                                            seterrmsg("");
                                                            setfinalmsg("");
                                                        }}>
                                                        SAVE
                                                        <IconCheck className="h-4 w-4" />
                                                    </button>
                                                </div>

                                                {/* validation message */}
                                                {
                                                    errmsg &&
                                                    <p className="text-center text-[15px] font-medium text-red-500 sm:col-span-2">{errmsg}</p>
                                                }

                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>

                            {/* saved entries + final batch submit */}
                            <div className="mx-auto mt-10 w-full max-w-[640px]">
                                <div className="rounded-2xl border border-[#CBE5C6] bg-[#F3FAF1] p-6 shadow-sm">
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
                                            Saved Entries ({saved.length})
                                        </p>
                                        {
                                            saved.length > 0 &&
                                            <button
                                                type="button"
                                                onClick={clearAll}
                                                className="text-xs font-semibold text-gray-400 underline transition hover:text-red-500">
                                                CLEAR ALL
                                            </button>
                                        }
                                    </div>

                                    {
                                        saved.length === 0 &&
                                        <p className="mt-3 text-center text-sm text-gray-500">
                                            Nothing saved yet — fill a form above and press SAVE.
                                        </p>
                                    }

                                    <div className="mt-4 flex flex-col gap-2">
                                        {
                                            saved.map((e) => (
                                                <div key={e.id} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm shadow-sm">
                                                    <span className="font-semibold text-[#1f2a24]">
                                                        {prettyName(e.category)} · {e.elem}
                                                    </span>
                                                    <span className="text-gray-500">
                                                        {e.amount} {e.unit} / {e.freq} × {e.factor}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        title="Remove entry"
                                                        aria-label={`Remove ${prettyName(e.category)} ${e.elem}`}
                                                        onClick={() => removeEntry(e.id)}
                                                        className="ml-auto rounded p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                                                    >
                                                        <IconTrash className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="mt-5 flex justify-center">
                                        <button
                                            type="button"
                                            onClick={submitAll}
                                            disabled={saved.length === 0}
                                            className="flex items-center gap-3 rounded-full bg-[#2E7D32] px-8 py-3 text-[15px] font-semibold text-white shadow-md transition hover:bg-[#256328] disabled:cursor-not-allowed disabled:opacity-40">
                                            SUBMIT ALL
                                            <IconArrow className="h-4 w-4" />
                                        </button>
                                    </div>

                                    {
                                        finalmsg &&
                                        <p className="mt-3 text-center text-[15px] font-medium text-red-500">{finalmsg}</p>
                                    }
                                </div>

                                {/* combined result: daily / monthly / yearly across everything saved */}
                                {
                                    result &&
                                    <div className="mt-6 rounded-2xl border border-[#CBE5C6] bg-white p-6 shadow-md">
                                        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
                                            Total Carbon Footprint ({result.count} entries)
                                        </p>

                                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                                            <div className="rounded-xl border border-gray-100 bg-[#F3FAF1] p-4 text-center shadow-sm">
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Daily</p>
                                                <p className="mt-1 text-2xl font-bold text-[#1f2a24]">{result.daily}</p>
                                                <p className="text-xs text-gray-400">kg CO2</p>
                                            </div>
                                            <div className="rounded-xl border border-gray-100 bg-[#F3FAF1] p-4 text-center shadow-sm">
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Monthly</p>
                                                <p className="mt-1 text-2xl font-bold text-[#1f2a24]">{result.monthly}</p>
                                                <p className="text-xs text-gray-400">kg CO2</p>
                                            </div>
                                            <div className="rounded-xl border border-[#CBE5C6] bg-[#F3FAF1] p-4 text-center shadow-sm">
                                                <p className="text-xs font-semibold uppercase tracking-wider text-[#2E7D32]">Yearly</p>
                                                <p className="mt-1 text-2xl font-bold text-[#2E7D32]">{result.yearly}</p>
                                                <p className="text-xs text-gray-400">kg CO2</p>
                                            </div>
                                        </div>

                                        <div className="mt-5 border-t border-[#CBE5C6] pt-4">
                                            <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500">Breakdown per entry (daily / monthly / yearly)</p>
                                            <div className="mt-3 flex flex-col gap-1.5">
                                                {
                                                    result.entries.map((e) => (
                                                        <div key={e.id} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg bg-[#F3FAF1] px-4 py-2 text-xs">
                                                            <span className="font-medium text-gray-600">
                                                                {prettyName(e.category)} · {e.elem} ({e.amount} {e.unit} {e.freq})
                                                            </span>
                                                            <span className="text-gray-500">
                                                                {e.daily} / {e.monthly} / {e.yearly} kg CO2
                                                            </span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </>
                    )
                }

            </section>
        </div>
    </div>
  )
}

export default Calculator
