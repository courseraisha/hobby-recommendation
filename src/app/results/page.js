'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import hobbies from '../../../data/hobbies';
import Link from 'next/link';

export default function Results() {
    const searchParams = useSearchParams();
    const [matchedHobbies, setMatchedHobbies] = useState([]);

    useEffect(() => {
        // Get user's answers from URL parameters
        const userAnswers = Array.from({ length: 10 }, (_, i) => 
            searchParams.get(`q${i + 1}`)
        );

        // Debug: Log the user answers
        console.log('User Answers Array:', userAnswers);

        // Calculate matches for each hobby
        const hobbyMatches = hobbies.map(hobby => {
            let matchCount = 0;
            
            // Compare each tag with corresponding user answer
            hobby.tags.forEach((tag, index) => {
                // Debug: Log each comparison
                console.log(`Comparing hobby tag "${tag}" with user answer "${userAnswers[index]}"`);
                if (tag === userAnswers[index]) {
                    matchCount++;
                    console.log(`Match found at index ${index}!`);
                }
            });

            return {
                ...hobby,
                matchCount,
                matchPercentage: (matchCount / 10) * 100
            };
        });

        // Filter hobbies with at least 1 match and sort by match count
        const topMatches = hobbyMatches
            .filter(hobby => hobby.matchCount > 0)
            .sort((a, b) => b.matchCount - a.matchCount)
            .slice(0, 2);

        setMatchedHobbies(topMatches);
    }, [searchParams]);

    // Show message if no matches found
    if (matchedHobbies.length === 0) {
        return (
            <div className="flex flex-col items-center p-6">
                <h1 className="text-2xl font-bold mb-4">No Matching Hobbies Found</h1>
                <p className="mb-6">Try adjusting your preferences to find better matches.</p>
                <Link 
                    className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white font-medium p-4 rounded hover:shadow-lg"
                    href="/quiz"
                >
                    Take the Quiz Again
                </Link>
            </div>
        );
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col items-center p-6">
                <h1 className="text-2xl font-bold mb-6">Your Perfect Hobby Matches</h1>
                {/* Centered button for navigation */}
                <div className="flex justify-center mb-6">
                    <Link 
                        className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white font-medium p-4 rounded hover:shadow-lg"
                        href="/quiz"
                    >
                        Take the Quiz Again
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center w-full max-w-4xl">
                    {matchedHobbies.map((hobby, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 m-4 w-96 border border-[#FFDCE1]">
                            <h2 className="text-xl font-semibold mb-2">{hobby.name}</h2>
                            <p className="text-gray-700 mb-4">{hobby.description}</p>
                            <div className="mb-4">
                                <div className="bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] h-2 rounded-full"
                                        style={{ width: `${hobby.matchPercentage}%` }}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                    {hobby.matchCount} out of 10 preferences matched
                                </p>
                            </div>
                            <div className="flex flex-wrap">
                                {hobby.tags.map((tag, tagIndex) => (
                                    <span 
                                        key={tagIndex} 
                                        className={`inline-block rounded-full px-3 py-1 text-sm mr-2 mb-2 ${
                                            tag === searchParams.get(`q${tagIndex + 1}`) 
                                                ? 'bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white'
                                                : 'bg-gray-200 text-gray-700'
                                        }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Suspense>
    );
}