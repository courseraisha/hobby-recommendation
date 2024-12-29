'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import hobbies from '../../../data/hobbies';
import styles from './results.module.css';
import Link from 'next/link';

export default function Results() {
    const searchParams = useSearchParams();
    const [matchedHobbies, setMatchedHobbies] = useState([]);

    useEffect(() => {
        // Get user's answers from URL parameters
        const userAnswers = [
            searchParams.get('q1'),
            searchParams.get('q2'),
            searchParams.get('q3'),
            searchParams.get('q4'),
            searchParams.get('q5'),
            searchParams.get('q6'),
            searchParams.get('q7'),
            searchParams.get('q8'),
            searchParams.get('q9'),
            searchParams.get('q10'),
        ];

        // Debug: Log the URL parameters and user answers
        console.log('URL Parameters:', Object.fromEntries(searchParams));
        console.log('User Answers Array:', userAnswers);

        // Debug: Log a sample hobby's tags
        console.log('Sample Hobby Tags (Board Games):', hobbies[0].tags);

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
            <div className={styles.container}>
                <h1>No Matching Hobbies Found</h1>
                <p>Try adjusting your preferences to find better matches.</p>
            </div>
        );
    }

    return (
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
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 m-4 w-96">
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
                                    className={`inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2 ${
                                        tag === searchParams.get(`q${tagIndex + 1}`) 
                                            ? 'bg-[#8B1E3F] text-white' 
                                            : ''
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
    );
}
