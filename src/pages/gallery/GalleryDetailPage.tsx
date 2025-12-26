import React, { useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { DotsLoading } from '../../components/ui/Loading';

interface Album {
    id: number;
    title: string;
    description?: string;
    cover: string;
    slug: string;
    imageCount: number;
    images: string[];
}


const GalleryDetailPage = () => {
    // const [isLoading, setIsLoading] = useState<boolean>(false)
    const { slug } = useParams<{ slug: string }>();

    const albums: Album[] = [
        {
            id: 1,
            title: "Farm Operations",
            cover: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop",
            imageCount: 12,
            slug: 'farm-operations',
            description: 'Wonderful time at Bhotepul farm in dharan.',
            images: [
                "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=2000&h=800&fit=crop",
                "https://images.unsplash.com/photo-1543342384-1f1350e27861?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1559163499-413811fb2344?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=3000&h=800&fit=crop",
                "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=3000&h=800&fit=crop",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1558929996-da64ba858215?w=1200&h=1000&fit=crop"
            ]
        },
        {
            id: 2,
            title: "Poultry Care",
            cover: "https://images.unsplash.com/photo-1548476074-8f85c0c3e6c7?w=800&h=600&fit=crop",
            imageCount: 9,
            slug: 'poultry-care',
            images: [
                "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1568526381923-caf3fd520382?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1617791160588-241658c0f566?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=1200&h=800&fit=crop"
            ]
        },
        {
            id: 3,
            title: "Team & Events",
            cover: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
            imageCount: 15,
            slug: 'team-and-events',
            images: [
                "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop"
            ]
        },
        {
            id: 4,
            title: "Products",
            cover: "https://images.unsplash.com/photo-1582044131921-a1e4c1c5d3f4?w=800&h=600&fit=crop",
            imageCount: 8,
            slug: 'products',
            images: [
                "https://images.unsplash.com/photo-1582044131921-a1e4c1c5d3f4?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1587049352846-4a222e784320?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1599909533730-f9d7e2c7e0f5?w=1200&h=800&fit=crop"
            ]
        },
        {
            id: 5,
            title: "Facilities",
            cover: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=600&fit=crop",
            imageCount: 10,
            slug: 'facilities',
            images: [
                "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1559163499-413811fb2344?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1585233647669-14e03092db7a?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1558929996-da64ba858215?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop"
            ]
        },
    ];

    const album = albums.find((a)=> a.slug === slug)
    const [selectedImage, setSelectedImage] = useState<string | null>();
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);


    const closeImage = (): void => {
        setSelectedImage(null);
    };

    const openImage = (imageUrl: string, index: number): void => {
        setSelectedImage(imageUrl);
        setCurrentImageIndex(index);
    };

    const nextImage = (): void => {
        if (album && currentImageIndex < album.images.length - 1) {
            const newIndex = currentImageIndex + 1;
            setCurrentImageIndex(newIndex);
            setSelectedImage(album.images[newIndex]);
        }
    };

    const prevImage = (): void => {
        if (album && currentImageIndex > 0) {
            const newIndex = currentImageIndex - 1;
            setCurrentImageIndex(newIndex);
            setSelectedImage(album.images[newIndex]);
        }
    };

    // if(isLoading){
    //     return <DotsLoading />
    // }

    if(!album){
        return(
            <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Album Not Found</h2>
                    <Link to="/gallery" className="text-primary hover:underline">
                        ← Back to Gallery
                    </Link>
                </div>
            </div>
            </>
        )
    }
    return (
        <>
            <div className="min-h-screen bg-background py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32">
                {/* Back Button */}
                <Link
                to='/gallery'
                    className="mb-8 flex items-center gap-2 text-gray-700 hover:text-primaryDark font-semibold transition-colors group"
                >
                    <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Albums
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">{album.title}</h1>
                    <h3 className='text-center text-secHeader'>{album.description}</h3>
                    <p className="text-lg text-gray-600">{album.imageCount} Photos</p>
                </div>

                {/* Images Grid */}
                {/* Images Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {album.images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => openImage(image, index)}
                            className="group relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl break-inside-avoid mb-6"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={image}
                                    alt={`${album.title} ${index + 1}`}
                                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <p className="text-sm font-semibold">View Full Size</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Full Screen Image Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeImage}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeImage}
                            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors z-10"
                        >
                            <FaTimes className="text-2xl" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute top-4 left-4 text-white bg-black/50 px-4 py-2 rounded-full font-semibold">
                            {currentImageIndex + 1} / {album.images.length}
                        </div>

                        {/* Previous Button */}
                        {currentImageIndex > 0 && (
                            <button
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-4 transition-colors"
                            >
                                <FaChevronLeft className="text-3xl" />
                            </button>
                        )}

                        {/* Next Button */}
                        {currentImageIndex < album.images.length - 1 && (
                            <button
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-4 transition-colors"
                            >
                                <FaChevronRight className="text-3xl" />
                            </button>
                        )}

                        {/* Image */}
                        <img
                            src={selectedImage}
                            alt="Full size"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default GalleryDetailPage