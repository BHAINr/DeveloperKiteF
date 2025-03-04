import React, { useState, useEffect } from 'react';
import '../CSS/RatingFome.css';  // Assuming your CSS is correct
import { getRating } from '../action/rFPostActions';  // Import getRating function

const RatingDisplay = () => {
  const [ratings, setRatings] = useState(null);  // Store ratings data
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null);     // Track error state

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchRatings = async () => {
      setLoading(true); // Set loading to true when fetching
      try {
        const result = await getRating(); // Call the getRating function
        
        if (result.success) {
          console.log('API Response:', result); // Log response for debugging

          // Directly set the data, even if it's not an array
          setRatings(result.data); // Use result.data directly here
        } else {
          setError('Failed to fetch ratings');
          setRatings(null);  // Clear ratings data
        }
      } catch (err) {
        console.error('Error fetching ratings:', err);
        setError('Error fetching ratings: ' + err.message);
        setRatings(null);  // Clear ratings data
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    // Call the function to fetch ratings
    fetchRatings();
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  // Show loading message while fetching data
  if (loading) {
    return <div>Loading ratings...</div>;
  }

  // Show error message if something goes wrong
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Debugging: Check the structure of the ratings state
  console.log('Ratings state:', ratings);

  return (
    <div className="ratings-container">
      <h2>Customer Ratings</h2>
      <div className="ratings-grid">
        {ratings ? (
          // If we have ratings, display each one in a separate block
          Array.isArray(ratings) ? (
            ratings.map((item, index) => (
              <div key={index} className="rating-card">
                <h3>{item.clientName}</h3>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={i < parseInt(item.rating) ? "star filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="service-name">Service: {item.serviceName}</p>
                {item.review && <p className="review-text">Review: {item.review}</p>}
                <p className="date-text">
                  {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'No date available'}
                </p>
              </div>
            ))
          ) : (
            // If ratings is not an array (handle the case where it's an object or other type)
            <div className="rating-card">
              <p>No ratings available in expected format.</p> {/* Provide a fallback message */}
            </div>
          )
        ) : (
          // If there's no data
          <p>No ratings found</p>
        )}
      </div>
    </div>
  );
};

export default RatingDisplay;
