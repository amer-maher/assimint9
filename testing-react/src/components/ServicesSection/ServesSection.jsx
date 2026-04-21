import ServesCard from "../ServicesCard/ServicesCard";

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            imgLink: "/images/web-dev.jpg",
            des: "Professional Web Development Services",
            routTo: "web-development", // Just the slug, not full path
            alt: "Web development illustration"
        },
        {
            id: 2,
            imgLink: "/images/mobile-app.jpg",
            des: "Mobile App Development",
            routTo: "mobile-app",
            alt: "Mobile app development"
        },
        {
            id: 3,
            imgLink: "/images/consulting.jpg",
            des: "IT Consulting Services",
            routTo: "consulting",
            alt: "IT consulting"
        }
    ];

    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {services.map(service => (
                <ServesCard 
                    key={service.id}
                    imgLink={service.imgLink}
                    des={service.des}
                    routTo={service.id.toString()} // Use the ID as the parameter
                    alt={service.alt}
                />
            ))}
        </div>
    );
};

export default ServicesSection;