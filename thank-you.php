<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <style media="screen">
			.thankyou-wapper{
				text-align: center;
			}
			.thankyou-wapper p{
				margin-bottom: 0;
				color: #4a4e57;
        font-size: 20px;
        margin-top: 10px;
			}
			.thankyou-wapper #emailPlaceholder {
			  font-weight: bold;
				color: #df4a16;
			}
			.thankyou-wapper p a {
			  font-weight: bold;
				color: #df4a16;
			}
      .thankyou-wapper{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: "Poppins", sans-serif;
      }
      .thankyou-wapper .title-heading-center{
        font-size: 48px;
        color: #1d242d;
        font-weight: bold;
        margin-bottom: 30px;
      }
      .thankyou-wapper .title-heading-center .text_blue {
        color: #ff5a60 !important;
      }
		</style>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
		<script src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"></script>
    <!-- Display the email on the page -->
	  	<div class="thankyou-wapper">
        <h2 class="title-heading-center" style="margin:0;">Great news, <span class="text_blue">your application is complete!</span></h2>
  			<div class="fireworks" id="fireworks"></div>
  			<p>One of our finance executives will be in touch ASAP to discuss your quote and the next steps.</p>
  			<!-- <p>Warranty documents will be emailed to <span id="emailPlaceholder"></span> within 24 hours!</p> -->
  	    <p>Alternatively, if you don’t want to wait, please call us on <a href="tel:02039174707"> 02039174707</a></p>
  		</div>
		<script type="text/javascript">
			const defaults = {
				spread: 200,
				ticks: 100,
				gravity: 0,
				decay: 0.94,
				startVelocity: 30,
			};
			function shoot() {
					confetti({
					...defaults,
					particleCount: 100,
					scalar: 1.2,
					shapes: ["circle", "square"],
					colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
				});

				confetti({
					...defaults,
					particleCount: 70,
					scalar: 3,
					shapes: ["emoji"],
					shapeOptions: {
						emoji: {
							value: ["✨", "🎉", "🧧", "🎟️"],
						},
					},
				});
			}

			setTimeout(shoot, 0);
			setTimeout(shoot, 100);
			setTimeout(shoot, 200);

      // Clear only the 'store' item from sessionStorage
      window.sessionStorage.removeItem('store');

		</script>
  </body>
</html>
