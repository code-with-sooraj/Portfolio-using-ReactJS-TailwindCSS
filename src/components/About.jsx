const abouts = [
    {
      id: 1,
      title: 'Graduation',
      href: 'https://vignan.ac.in/newvignan/',
      description:
        ' I am pursuing my BTech in Computer Science and Engineering from Vignan University, where I gained a strong foundation in software development, algorithms, and computer systems. My education provided me with both theoretical knowledge and practical skills.',
      date: 'Oct 10, 2021 - Present',
      category: { title: 'BTech', href: '#' },
      
    },
    {
        id: 2,
        title: 'Intermediate',
        href: 'https://secondary.biharboardonline.com/',
        description:
          'I completed my intermediate education in the Science stream, which laid a strong foundation in mathematics, physics, and chemistry. This rigorous background equipped me with analytical skills and a scientific mindset, preparing me for advanced studies and a career in technology',
        date: 'April, 2020',
        category: { title: 'Science', href: '#' },
      },
      
    {
        id: 2,
        title: 'School',
        href: 'https://www.cbse.gov.in/',
        description:
          'I completed my 10th grade under the CBSE board, where I developed a solid academic foundation across various subjects including mathematics, science, and languages. This comprehensive education prepared me for higher studies and laid the groundwork for my subsequent academic and professional pursuits.',
        date: 'May, 2018',
        category: { title: 'General', href: '#' },
      },
    // More abouts...
  ]
  
  export default function About() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Know more about me
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-500 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {abouts.map((about) => (
              <article key={about.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-sm">
                  <time className="text-gray-500">
                    {about.date}
                  </time>
                 
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={about.href}>
                      <span className="absolute inset-0" />
                     <u> {about.title}</u>
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-8 text-md leading-6 text-gray-600">{about.description}</p>
                </div>
                
                
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  