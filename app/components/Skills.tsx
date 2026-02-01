"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Lenguajes",
    skills: ["Java", "C#", "Python", "JavaScript"],
  },
  {
    title: "Frameworks",
    skills: [".NET", "ASP.NET Core", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB", "Supabase", "Azure", "SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    title: "Herramientas",
    skills: ["WordPress", "Elementor Pro", "Git", "GitHub", "VS Code"],
  },
];

const techStack = [
  { 
    name: "React", 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </svg>
    )
  },
  { 
    name: "Next.js", 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0Zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054Z"/>
      </svg>
    )
  },
  { 
    name: "Vercel", 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1Z"/>
      </svg>
    )
  },
  { 
    name: "WordPress", 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.027-.78-.07-1.11m-7.981.105c.647-.034 1.231-.102 1.231-.102.582-.075.514-.93-.068-.898 0 0-1.749.138-2.877.138-.962 0-2.58-.138-2.58-.138-.582-.03-.648.893-.066.898 0 0 .544.068 1.125.102l1.67 4.577-2.347 7.037-3.9-11.614c.648-.034 1.231-.102 1.231-.102.583-.075.514-.93-.068-.898 0 0-1.748.138-2.877.138-.202 0-.44-.005-.69-.014C4.709 2.75 8.147.5 12 .5c2.88 0 5.496 1.095 7.469 2.894-.048-.003-.095-.008-.144-.008-1.097 0-1.877.953-1.877 1.98 0 .92.53 1.701 1.094 2.622.425.747.92 1.701.92 3.082 0 .96-.368 2.074-.852 3.625l-1.115 3.727-4.03-11.992zM12 22.5c-1.756 0-3.414-.404-4.89-1.121l2.604-7.561 2.666 7.31c.018.044.04.084.063.122a10.457 10.457 0 0 1-.443.25M1.213 12c0-1.61.363-3.136 1.01-4.5l5.563 15.243A10.5 10.5 0 0 1 1.213 12M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0"/>
      </svg>
    )
  },
  { 
    name: ".NET", 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zM3.612 15.773c-.323.094-.695.14-1.114.14a2.145 2.145 0 0 1-1.64-.68c-.43-.453-.644-1.054-.644-1.802 0-.818.232-1.465.697-1.94.465-.478 1.09-.717 1.873-.717.339 0 .636.032.893.097v1.09a1.94 1.94 0 0 0-.835-.18c-.438 0-.781.146-1.03.438-.248.291-.372.69-.372 1.197 0 .484.116.866.348 1.147.232.282.549.422.952.422.32 0 .617-.07.892-.21z"/>
      </svg>
    )
  },
  { 
    name: "MongoDB", 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
      </svg>
    )
  },
  { 
    name: "Supabase", 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/>
      </svg>
    )
  },
  { 
    name: "Azure", 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z"/>
      </svg>
    )
  },
  { 
    name: "Git", 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    )
  },
  { 
    name: "VS Code", 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    )
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee animation only
      if (marqueeRef.current) {
        const marqueeContent = marqueeRef.current.querySelector(".marquee-content");
        if (marqueeContent) {
          gsap.to(marqueeContent, {
            xPercent: -50,
            duration: 25,
            repeat: -1,
            ease: "none",
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const marqueeText = "REACT • NEXT.JS • .NET • WORDPRESS • MONGODB • AZURE • JAVA • PYTHON • ";

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen relative py-32 px-8 md:px-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-black text-white/[0.02] tracking-tighter">
          SKILLS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <span className="block text-sm font-mono text-primary tracking-widest uppercase mb-4">
            / Habilidades Técnicas
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            Mi stack
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight gradient-text-static pb-4">
            tecnológico
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Skills categories */}
          <div className="space-y-6">
            <p className="text-muted text-lg mb-8 max-w-md">
              Tecnologías y herramientas que utilizo para crear soluciones robustas y escalables.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="category-card group p-6 border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium text-foreground/80 bg-secondary/50 border border-border hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Tech stack grid */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 border border-accent/10 rounded-full" />

            <div className="grid grid-cols-3 gap-4 p-8">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-item group relative p-5 border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-default text-center"
                >
                  <span className="text-primary mb-2 block flex justify-center">{tech.icon}</span>
                  <span className="text-xs font-medium text-muted group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee section */}
        <div ref={marqueeRef} className="mt-24 overflow-hidden border-y border-border py-6">
          <div className="marquee-content flex whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-4xl md:text-5xl font-black text-white/[0.03] tracking-wider mx-4"
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "4", label: "Lenguajes" },
            { value: "5", label: "Frameworks" },
            { value: "6", label: "Databases" },
            { value: "5", label: "Herramientas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-muted font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
