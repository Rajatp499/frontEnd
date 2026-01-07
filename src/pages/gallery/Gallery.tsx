import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaImages } from 'react-icons/fa';
import HeroSection from '../../components/layout/HeroSection';
// import { DotsLoading } from '../../components/ui/Loading';
import { motion } from 'framer-motion'

interface Album {
    id: number;
    title: string;
    slug: string;
    description?: string;
    cover: string;
    imageCount: number;
    images: string[];
}

const Gallery: React.FC = () => {
    // const [isLoading, setIsLoading] =useState<boolean>(false)
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    // Sample albums data
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

    const openAlbum = (album: Album): void => {
        setSelectedAlbum(album);
    };

    const closeImage = (): void => {
        setSelectedImage(null);
    };

    const nextImage = (): void => {
        if (selectedAlbum && currentImageIndex < selectedAlbum.images.length - 1) {
            const newIndex = currentImageIndex + 1;
            setCurrentImageIndex(newIndex);
            setSelectedImage(selectedAlbum.images[newIndex]);
        }
    };

    const prevImage = (): void => {
        if (selectedAlbum && currentImageIndex > 0) {
            const newIndex = currentImageIndex - 1;
            setCurrentImageIndex(newIndex);
            setSelectedImage(selectedAlbum.images[newIndex]);
        }
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent): void => {
            if (!selectedImage) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeImage();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedImage, currentImageIndex]);


    return (<>
        {/* Hero Section */}
        <HeroSection heading='Photo Gallery' subHeading='Explore our collection of moments and memories' />
        {/* {
                (!isLoading) ? */}
        <div className="min-h-screen bg-background py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album) => (
                    <motion.div
                        key={album.id}
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: album.id * 0.1 }}
                    >
                        <Link
                            to={`${album.slug}`}
                            onClick={() => openAlbum(album)}
                        >
                            <div className="aspect-4/3 overflow-hidden">
                                <img
                                    src={album.cover}
                                    alt={album.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-2">{album.title}</h3>
                                <div className="flex items-center gap-2 text-secHeader">
                                    <FaImages />
                                    <span className="text-sm">{album.imageCount} Photos</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
        {/* :
            <DotsLoading />
                } */}
    </>);
};

export default Gallery;