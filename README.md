# UFO Sightings with JavaScript

## Overview of the project

The purpose of this project is to help Dana, a data journalist, to create a UFO sightings webpage. Using a data file that contains detail about UFO sightings, we will display the data as a table and add interactive filters using JavaScript. While we initially set the page up to display the data based on specified dates, we are now going to add filters for other parameters (such as city, state, and shape of UFO object). The final product will be an HTML page that includes clean headers, an article written by Dana, and this filterable table.  

## Results

Upon accessing the page, users may leverage the filters using the boxes on the left: date, city, state, country, and shape.  

![UFO filters](/Screenshots/UFO_filters.PNG)  

Enter criteria that’s of interest in the search boxes and click outside of the boxes to update the table.  Additional criteria may be entered to further narrow the search.  
*Note: Case and format must match that used in the table.*  

**FL sightings on 1/1/2010**  
![FL filters](/Screenshots/FL_filters.PNG)  

Filters can be removed by deleting any search criteria that’s been entered and clicking outside of the box, or by clicking the “UFO Sightings” link in the upper left corner of the page.  

![Remove filters](/Screenshots/Remove_filters.png)  

## Summary

One main drawback of this new design is that users must match case and spelling exactly, in order for filters to work properly. Incorrect spelling or case will return an empty table.

A few possible enhancements for future consideration and development are:
- Adding a button within the “filter search” box to clear all filters, rather than having users scroll to the top of the page to find the link.  
- Leveraging dropdown lists, or close matches, to generate table data from filters. This is so users don’t have to exactly match case and spelling.  
- Build an “export to CSV” function so users can store and manipulate data on their own.  
- Incorporate data feeds to keep table data updated with the most recent sightings data.
