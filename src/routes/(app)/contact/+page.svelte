<script lang="ts">
	//
</script>

<svelte:head>
	<title>ติดต่อเรา</title>
</svelte:head>

<!--page header section start-->
<section
	class="page-header position-relative overflow-hidden ptb-120 bg-green"
	style="background: url('/images/a-website/bg-contact-us.png')no-repeat center right"
>
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-md-12">
				<h1 class="display-5 fw-bold">ติดต่อเรา</h1>
				<p class="lead">
					เพื่อเพิ่มประสบการณ์การใช้งานของคุณ หากคุณมีคำถามหรือข้อสงสัยใดๆ
					โปรดอย่าลังเลที่จะติดต่อเรา
				</p>
			</div>
		</div>
	</div>
</section>
<!--page header section end-->

<!--contact us promo section start-->
<section class="contact-promo ptb-120">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
				<div
					class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100"
				>
					<span class="fas fa-comment fa-3x text-primary"></span>
					<div class="contact-promo-info mb-4">
						<h5>Chat with us</h5>
						<p>
							We've got live Social Experts waiting to help you <strong>monday to friday</strong>
							from
							<strong>9am to 5pm EST.</strong>
						</p>
					</div>
					<a href="mailto:hellothemetags@gmail.com" class="btn btn-link mt-auto">Chat with us</a>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
				<div
					class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100"
				>
					<span class="fas fa-envelope fa-3x text-primary"></span>
					<div class="contact-promo-info mb-4">
						<h5>ทางอีเมล</h5>
						<p>
							ง่ายๆ เพียงส่งอีเมลถึงเราที่ <strong>tcprochem@gmail.com</strong>
							และคุณจะได้รับการตอบกลับภายใน 24 ชั่วโมง
						</p>
					</div>
					<a href="mailto:tcprochem@gmail.com" class="btn btn-primary mt-auto">ติดต่อทางอีเมล</a>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
				<div
					class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100"
				>
					<span class="fas fa-phone fa-3x text-primary"></span>
					<div class="contact-promo-info mb-4">
						<h5>โทรหาเรา</h5>
						<p>
							เรามีผู้ประสานงานคอยรับบริการ <strong>วันจันทร์ ถึง วันศุกร์</strong> ตั้งแต่
							<strong>9.00 ถึง 17.00</strong>
						</p>
					</div>
					<a href="tel:085-394-3991" class="btn btn-link mt-auto">085-394-3991</a>
					<a href="tel:081-628-7672" class="btn btn-link mt-auto">081-628-7672</a>
				</div>
			</div>
		</div>
	</div>
</section>
<!--contact us promo section end-->

<!--contact us form start-->
<section
	class="contact-us-form pt-60 pb-120"
	style="background: url('/images/shape/contact-us-bg.svg')no-repeat center bottom"
>
	<div class="container">
		<div class="row justify-content-lg-between align-items-center">
			<div class="col-lg-6 col-md-8">
				<div class="section-heading">
					<h2>Talk to Our Sales & Marketing Department Team</h2>
					<p>
						Collaboratively promote client-focused convergence vis-a-vis customer directed
						alignments via standardized infrastructures.
					</p>
				</div>
				<form action="#" class="register-form">
					<div class="row">
						<div class="col-sm-6">
							<label for="firstName" class="mb-1"
								>First name <span class="text-danger">*</span></label
							>
							<div class="input-group mb-3">
								<input
									type="text"
									class="form-control"
									id="firstName"
									required
									placeholder="First name"
									aria-label="First name"
								/>
							</div>
						</div>
						<div class="col-sm-6">
							<label for="lastName" class="mb-1">Last name</label>
							<div class="input-group mb-3">
								<input
									type="text"
									class="form-control"
									id="lastName"
									placeholder="Last name"
									aria-label="Last name"
								/>
							</div>
						</div>
						<div class="col-sm-6">
							<label for="phone" class="mb-1">Phone <span class="text-danger">*</span></label>
							<div class="input-group mb-3">
								<input
									type="text"
									class="form-control"
									id="phone"
									required
									placeholder="Phone"
									aria-label="Phone"
								/>
							</div>
						</div>
						<div class="col-sm-6">
							<label for="email" class="mb-1">Email<span class="text-danger">*</span></label>
							<div class="input-group mb-3">
								<input
									type="email"
									class="form-control"
									id="email"
									required
									placeholder="Email"
									aria-label="Email"
								/>
							</div>
						</div>
						<div class="col-12">
							<label for="yourMessage" class="mb-1"
								>Message <span class="text-danger">*</span></label
							>
							<div class="input-group mb-3">
								<textarea
									class="form-control"
									id="yourMessage"
									required
									placeholder="How can we help you?"
									style="height: 120px"
								></textarea>
							</div>
						</div>
					</div>
					<button type="submit" class="btn btn-primary mt-4">Get in Touch</button>
				</form>
			</div>
			<div class="col-lg-5 col-md-10">
				<div class="contact-us-img">
					<img src="/images/contact-us-img-2.svg" alt="contact us" class="img-fluid" />
				</div>
			</div>
		</div>
	</div>
</section>
<!--contact us form end-->
