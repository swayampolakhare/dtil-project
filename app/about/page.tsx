import React from 'react';

const defaultImage = 'https://via.placeholder.com/150'; // Placeholder for missing images

const teamImages: { [key: string]: string } = {
    'Swayam Polakhare': 'https://media-hosting.imagekit.io//b8c34f99ee4241d6/WhatsApp%20Image%202025-03-23%20at%2010.13.04%20PM.jpeg?Expires=1837359050&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1Il~8xKJpU7UmGxG0HD1RFERml4ksa0ex8IRBvh6jLsacDCJw8bOavMAerG2aJRbE9EmUlSL1BgZSyPBk4dT-dA1ZX2e~OPT-PKpek-HCZybgitlvIj9NykTy3r4j3cedK9AnJWau75TAOtvea5UQuDnMGztulWQ3V49pLGOsv-Ue44cyXVkvt8Lac3aFlpZ35oAttryFHXWNpK7QG9NBhV1ZFfQN6HL7C29lFfZU6o2f-64jnGnrow~FiP7TVJKMUCyPc9xW66U6R2ayCJOTfaK0lfG3pZR3qt2kwLgpxzvsaTI-iwoGlH-fTmggVb73EF2~IIOt~KBo6KPr3Iimg__',
    'Mrudul Paulbudhe': 'https://media-hosting.imagekit.io//faa6ea81e18c40ac/Screenshot_20250211_013008_Gallery.jpg?Expires=1837358873&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eUSaPmUobNoBGtBvHNl2yQ353E3Q73JqpOUZlsuOjEIzkZbP6XZUG2Y394g6gjPlFvoTh59Zseas6vn19Qn3yoEYUOLoS-JPOtNKgV9g2TfePLipYqcEhnTEWTuFKXQvF401OQWEewsT4zABSFvl7y-u-IpQaFABWA5UkApYnwxxjvG8AezndTibpFsEG7pjfBNq3vah0CtofJcdFpWBSUqPq8tn7sd8zaS1TYUxnB7Whbrf71wvToIuix4ettxp1QvDBsxf8jbrKKnqfFCnF8fowqFbO64GZlyItknEgi7Fpc7OA6BuFMXgnJ5CnkriRi93yLm7L0NY9a5VloKPkw__',
    'Prashant Sahani': 'https://cdni.iconscout.com/illustration/premium/thumb/educational-funds-4489895-3832831.png',
    'Pranav Chavan': 'https://media-hosting.imagekit.io//36b71f4ab0734ccb/WhatsApp%20Image%202025-03-23%20at%2011.28.52%20PM.jpeg?Expires=1837360779&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xB-Oavsnvhol~foFN3PIMd8j2Gp-WphZJu22agK8-pMe0UenCQOuWGHIBSzFsvS95iqRZH4kOxNVzfjKOlbL~J5~ZwhaLG2iUJPoUHIBKDzqN0WpPOkdh4ExA1hfEyDPJAPxX8HOn0HoraEh1ZBSclDBChJrGLmGXm3qrc1ccGEx4EKXkPd-zQNttz4qvH3zezx4oMoGdvnBRuwOLuc2eP-Sn8MLs9RwogZbLBcqDHRoxA~jmxtH7YOiw5J9rEPmMoiRGzesHOKIbe5QfsM-u6OORo-v84hGlikyEYBxrM7jMF7BOYslVeKXA2QQ9V7VUgwc1sbFNBQT908n49cGuQ__',
    'Rushikesh Patil': 'https://media-hosting.imagekit.io//e2d9406848214153/WhatsApp%20Image%202025-03-23%20at%2011.20.14%20PM.jpeg?Expires=1837360289&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W9MCUqQ0F1LbfZ7WVnyLfPNxHg5gncnpCw8gu8OD11eJ8kh1a~NyiuMsSEzGDF6FNvNbveFYx4fXqnmit7oAzy6GG9qcH71w8IFHiqORx61P6~H63X5dCGWJf9kczz1KxiLfC1wVlX3CEzFTbRiNumJo13VCo1FabON7FiDTyvWL-2zev294TJvW0DwxHVF~-3Ok-rnZikiGk8bFbOWl4O26VSTiHXJLAT2GymMJz66lz55NbPtFmxG~YngtR64SseaqW8NgUMSkmaEIEIp0DinWPhD1f8uism7~5BoOpCGe93ceEbjGacyLgUupv7gEgU8h3l2Wc0r~4x9mKGekew__',
};

const AboutUs = () => {
    const teamMembers = [
        { name: 'Mrudul Paulbudhe', role: 'The Scout', bio: 'News and  Financial Affairs Expert. ' },
        { name: 'Swayam Polakhare', role: 'The Visionary', bio: 'Leader and Strategist, who turns Ideas into Reality.' },
        { name: 'Prashant Sahani', role: 'The Educator', bio: 'Financial Tips Expert.' },
        { name: 'Pranav Chavan', role: 'The Analyst', bio: 'Stock Market Expert.' },
        { name: 'Rushikesh Patil', role: 'The Guardian', bio: 'The Tester.' },
    ];

    return (
        <div style={{ 
            padding: '40px 20px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#f9f9f9'
        }}>
            <h1 style={{ 
                textAlign: 'center',
                color: '#2c3e50',
                fontSize: '2.5em',
                marginBottom: '20px'
            }}>
                Meet Our Team
            </h1>
            <p style={{
                textAlign: 'center',
                fontSize: '1.1em',
                color: '#666',
                maxWidth: '800px',
                margin: '0 auto 40px',
                lineHeight: '1.6'
            }}>
                We are a dedicated team of professionals committed to delivering high-quality solutions.
            </p>
            <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: '30px',
                justifyContent: 'center'
            }}>
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '20px',
                            width: '280px',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                    >
                        <img 
                            src={teamImages[member.name] || defaultImage} 
                            alt={member.name}
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                margin: '0 auto 20px',
                                display: 'block',
                                border: '3px solid #eaeaea'
                            }} 
                        />
                        <h3 style={{ 
                            margin: '0 0 8px',
                            color: '#2c3e50',
                            fontSize: '1.4em',
                            textAlign: 'center'
                        }}>
                            {member.name}
                        </h3>
                        <p style={{
                            margin: '0 0 12px',
                            color: '#e74c3c',
                            fontWeight: '600',
                            textAlign: 'center',
                            fontSize: '0.95em'
                        }}>
                            {member.role}
                        </p>
                        <p style={{
                            color: '#666',
                            lineHeight: '1.5',
                            textAlign: 'center',
                            margin: 0
                        }}>
                            {member.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
