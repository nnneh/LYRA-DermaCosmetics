"use client"
import React from 'react';
import {NavItemWithDropdown } from '../data/navigationData';

interface MegaDropdownProps {
    link: NavItemWithDropdown;
    isActive: boolean;
}

const PRIMARY_BLUE = '#007bff';
const GRAY_TEXT = '#4a5568'; // Tailwind gray-700 equivalent

const MegaDropdown: React.FC<MegaDropdownProps> = ({ link, isActive }) => {
    if (!link.dropdown || !isActive) {
        return null;
    }

    const { columns, featured } = link.dropdown;
    const columnCount = columns.length;
    const hasFeatured = featured && featured.length > 0;
    
    // --- 1. Dynamic Width Calculation and Positioning ---
    // Calculate the total number of content groups (columns + featured area)
    const totalGroups = columnCount + (hasFeatured ? 1 : 0);
    
    // Calculate content column width class
    let contentWidthClass = 'flex-1';
    let featuredWidthClass = 'flex-1';

    if (totalGroups > 0) {
        // Use flex basis for better distribution, but fallback to percentage if needed
        const baseWidth = 100 / totalGroups;
        contentWidthClass = `basis-[${baseWidth}%]`;
        featuredWidthClass = `basis-[${baseWidth}%]`;
        
        // Custom override for the New & Trending layout shown in the image:
        if (link.id === 'new-trending') {
            // BEST SELLERS (Content) takes 1/3, HAPPENING NOW (Featured) takes 2/3 of the area
            contentWidthClass = 'basis-1/3 max-w-[33.33%]';
            featuredWidthClass = 'basis-2/3 max-w-[66.66%]';
        }
    }
    
    // --- 2. Adjust Dropdown Container Position ---
    // Use relative positioning to the current menu link instead of absolute full width/center.
    // We adjust the `left` position to align the container's *edge* with the *start* of the main container.
    // The link is always inside `max-w-7xl mx-auto px-4`. We need to calculate how far it is from the left.
    // Since we don't have access to DOM ref measurements here, we will use a fixed offset
    // that assumes the dropdown starts near the logo, as per the image structure.
    
    // In the previous response, the main nav links were centered/after the logo.
    // The content looks like it's horizontally centered under the header content.
    // Let's use `left-0` for max-width dropdowns, but adjust content inside the p-8 flex to match image.
    const containerClasses = `absolute top-full left-0 right-0 w-full max-w-7xl mx-auto bg-white border-t border-gray-200 shadow-2xl z-50 transition-opacity duration-200 ${
        isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`;


    return (
        <div className={containerClasses} style={{ 
            // This pulls the max-width container outside of the main navigation container
            // We set it to full width of the viewport, then use max-w-7xl inside.
            // This is a common pattern for megamenus.
            left: '50%',
            transform: 'translateX(-50%)',
        }}>
            <div className="p-8 flex gap-8">
                
                {/* --- 1. Columns --- */}
                {columns.map((column) => (
                    <div 
                        key={column.title} 
                        className={`${contentWidthClass} min-w-[120px]`}
                        style={{ minWidth: '120px' }}
                    >
                        {/* Title Styling based on the link ID */}
                        {column.title && (
                            <h3 
                                className={`font-sans text-sm font-bold tracking-wide mb-4 uppercase ${
                                    link.id === 'new-trending' 
                                        ? `text-gray-800 border-b-2 border-transparent` // No blue text or blue border for 'New & Trending' title
                                        : `text-[${PRIMARY_BLUE}] pb-2 border-b border-gray-200` // Default styling
                                }`}
                            >
                                {column.title}
                            </h3>
                        )}
                        
                        {/* Special layout for "New & Trending" BEST SELLERS column */}
                        <div className={link.id === 'new-trending' ? 'grid grid-cols-2 gap-x-4 gap-y-2' : 'space-y-2'}>
                            {column.links.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`font-sans text-sm block py-1 transition-colors ${
                                        link.id === 'new-trending' ? 'text-gray-800 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}

                {/* --- 2. Featured Cards --- */}
                {hasFeatured && (
                    <div 
                        className={`${featuredWidthClass} min-w-[150px] flex flex-col gap-4 border-l border-gray-200 pl-8`}
                        style={{ minWidth: '150px' }}
                    >
                        
                        <h3 className="w-full font-sans text-sm font-bold text-gray-800 tracking-wide mb-2 uppercase">
                            HAPPENING NOW
                        </h3>
                        
                        {/* Two cards in a row */}
                        <div className="flex flex-wrap gap-4">
                            {featured!.map((card) => (
                                <a
                                    key={card.title}
                                    href={card.href}
                                    // Make cards take half the width minus the gap
                                    className={`group block w-[calc(50%-8px)]`} 
                                >
                                    {/* Image Placeholder/Container */}
                                    <div className="aspect-[1.5/1] bg-gray-100 rounded overflow-hidden mb-2">
                                        <img
                                            src={card.image} 
                                            alt={card.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <span className="font-sans text-xs font-bold text-gray-800 group-hover:text-blue-600 transition-colors block text-left uppercase">
                                        {card.title}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MegaDropdown;