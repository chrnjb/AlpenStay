<% layout("/layouts/boilerplate") %>
  <body>
    <h3>All Listings</h3>
    <!-- <form method="GET" action="/listings/new">
      <button>Create New Listing</button>
    </form> -->
  
<div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 ">
  <% for(let listing of allListings) { %>
    <a href="/listings/<%= listing._id %>" class="listing-link">
  <div class="card">
    <img 
      src="<%= listing.image.url %>" 
      class="card-img-top" 
      alt="listing_image" 
      style="height: 20rem" 
      onerror="this.onerror=null; this.src='https://images.hdqwalls.com/wallpapers/seascape-coast-minimal-qu.jpg';"
    />
    <div class="card-img-overlay"></div>
    <div class="card-body">
      <p class="card-text">
        <b><%= listing.title %></b><br>
        &#8377;<%= listing.price.toLocaleString("en-IN") %> / night
      </p>
    </div>
  </div>
</a>  
  <% } %> 
</div>
   

 
