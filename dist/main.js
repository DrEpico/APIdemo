(()=>{const e=document.querySelector("body");let t=document.createElement("div"),a=document.createElement("input"),o=document.createElement("button");o.textContent="Search",t.appendChild(a),t.appendChild(o),e.appendChild(t),o.addEventListener("click",(function(){searchContent=a.value.trim(),async function(t){try{const a=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=GH3b8W0axp1F1Iy69HGH9GuU0Za4fB3a&s=${t}`,{mode:"cors"}),o=await a.json();o.data&&o.data.images&&o.data.images.original.url?(n.src=o.data.images.original.url,console.log(o.data.images.original.url),e.appendChild(n)):(n.src="https://via.placeholder.com/150?text=No+GIF+Found",console.log("No GIF found for the search keyword."))}catch(e){n.src="https://via.placeholder.com/150?text=Error",console.error("An error occurred:",e)}}(searchContent)}));let n=document.createElement("img");n.setAttribute("src","#")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFBQSxNQUFNQSxFQUFPQyxTQUFTQyxjQUFjLFFBQ3BDLElBQUlDLEVBQVlGLFNBQVNHLGNBQWMsT0FDbkNDLEVBQVlKLFNBQVNHLGNBQWMsU0FDbkNFLEVBQWVMLFNBQVNHLGNBQWMsVUFDMUNFLEVBQWFDLFlBQWMsU0FDM0JKLEVBQVVLLFlBQVlILEdBQ3RCRixFQUFVSyxZQUFZRixHQUN0Qk4sRUFBS1EsWUFBWUwsR0FFakJHLEVBQWFHLGlCQUFpQixTQUFTLFdBQ25DQyxjQUFnQkwsRUFBVU0sTUFBTUMsT0FPcENDLGVBQXVCSCxHQUNuQixJQUNJLE1BQU1JLFFBQWlCQyxNQUFNLHNGQUFzRkwsSUFBaUIsQ0FBQ00sS0FBTSxTQUNySUMsUUFBZ0JILEVBQVNJLE9BQzNCRCxFQUFRRSxNQUFRRixFQUFRRSxLQUFLQyxRQUFVSCxFQUFRRSxLQUFLQyxPQUFPQyxTQUFTQyxLQUNwRUMsRUFBSUMsSUFBTVAsRUFBUUUsS0FBS0MsT0FBT0MsU0FBU0MsSUFDdkNHLFFBQVFDLElBQUlULEVBQVFFLEtBQUtDLE9BQU9DLFNBQVNDLEtBQ3pDdEIsRUFBS1EsWUFBWWUsS0FHakJBLEVBQUlDLElBQU0sb0RBQ1ZDLFFBQVFDLElBQUksd0NBRXBCLENBQUUsTUFBT0MsR0FFTEosRUFBSUMsSUFBTSw2Q0FDVkMsUUFBUUUsTUFBTSxxQkFBc0JBLEVBQ3hDLENBRUosQ0F6QklDLENBQVFsQixjQUNaLElBRUEsSUFBSWEsRUFBTXRCLFNBQVNHLGNBQWMsT0FDakNtQixFQUFJTSxhQUFhLE1BQU8sSSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmxldCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxldCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xubGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcbnNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hCb3gpO1xuc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG5ib2R5LmFwcGVuZENoaWxkKHNlYXJjaERpdik7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgc2VhcmNoQ29udGVudCA9IHNlYXJjaEJveC52YWx1ZS50cmltKCk7XG4gICAgZ2V0Q2F0cyhzZWFyY2hDb250ZW50KTtcbn0pO1xuXG5sZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnIycpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDYXRzKHNlYXJjaENvbnRlbnQpe1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PUdIM2I4VzBheHAxRjFJeTY5SEdIOUd1VTBaYTRmQjNhJnM9JHtzZWFyY2hDb250ZW50fWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3QgY2F0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGNhdERhdGEuZGF0YSAmJiBjYXREYXRhLmRhdGEuaW1hZ2VzICYmIGNhdERhdGEuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gY2F0RGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXREYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybCk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSBubyBHSUZzIGFyZSBmb3VuZFxuICAgICAgICAgICAgaW1nLnNyYyA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwP3RleHQ9Tm8rR0lGK0ZvdW5kJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBHSUYgZm91bmQgZm9yIHRoZSBzZWFyY2gga2V5d29yZC4nKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIEhhbmRsZSBuZXR3b3JrIGVycm9ycyBvciBvdGhlciBmZXRjaC1yZWxhdGVkIGVycm9yc1xuICAgICAgICBpbWcuc3JjID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTA/dGV4dD1FcnJvcic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yKTtcbiAgICB9XG4gICAgXG59Il0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hEaXYiLCJjcmVhdGVFbGVtZW50Iiwic2VhcmNoQm94Iiwic2VhcmNoQnV0dG9uIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWFyY2hDb250ZW50IiwidmFsdWUiLCJ0cmltIiwiYXN5bmMiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImNhdERhdGEiLCJqc29uIiwiZGF0YSIsImltYWdlcyIsIm9yaWdpbmFsIiwidXJsIiwiaW1nIiwic3JjIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZ2V0Q2F0cyIsInNldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=