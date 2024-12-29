'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import hobbies from '../../../data/hobbies';
import styles from './results.module.css';

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
        <div className={styles.container}>
            <h1>Your Perfect Hobby Matches</h1>
            {/* Debug information removed */}
            {/* <div style={{margin: '20px', padding: '20px', background: '#f0f0f0'}}>
                <h3>Debug Information:</h3>
                <p>User Answers: {JSON.stringify(Object.fromEntries(searchParams))}</p>
            </div> */}
            <div className={styles.results_container}>
                {matchedHobbies.map((hobby, index) => (
                    <div key={index} className={styles.hobby_card}>
                        <h2>{hobby.name}</h2>
                        <p className={styles.description}>{hobby.description}</p>
                        <div className={styles.match_info}>
                            <div className={styles.percentage_bar}>
                                <div 
                                    className={styles.percentage_fill}
                                    style={{ width: `${hobby.matchPercentage}%` }}
                                />
                            </div>
                            <p className={styles.match_score}>
                                {hobby.matchCount} out of 10 preferences matched
                            </p>
                        </div>
                        <div className={styles.tags}>
                            {hobby.tags.map((tag, tagIndex) => (
                                <span 
                                    key={tagIndex} 
                                    className={`${styles.tag} ${
                                        tag === searchParams.get(`q${tagIndex + 1}`) 
                                            ? styles.matching_tag 
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
