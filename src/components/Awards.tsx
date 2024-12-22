import { Card, CardContent } from "@/components/ui/card";

export const Awards = () => {
  const awards = [
    {
      title: "Web Literacy Grant Recipient",
      organization: "Mozilla Foundation",
      year: "2018-2019",
      description: "Recognized for providing web literacy to the community.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    },
    {
      title: "2023 IMLS National Medal Winner",
      organization: "Toledo Lucas County Public Library",
      year: "2023",
      description: "Awarded to only 8 libraries and/or museums in the country.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Google Ad Award Recipient",
      organization: "Various",
      year: "2018-Present",
      description: "Providing $10,000 monthly in ad credit per nonprofit.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Awards & Recognition
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <Card key={index} className="glass-card hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{award.title}</h3>
              <p className="text-sm text-gray-400 mb-3">
                {award.organization} • {award.year}
              </p>
              <p className="text-gray-300">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};