<script lang="ts">
	//
</script>

<svelte:head>
	<title>หน้าแรก</title>
 </svelte:head>

<section
	class="bg-dark hero-section overflow-hidden position-relative ptb-120 text-white"
	style="background: url('/images/a-website/profile-front.jpeg')no-repeat bottom right"
>
	<div class="container">
		<div class="row justify-content-between align-items-center">
			<div class="col-lg-6">
				<div class="hero-content-wrap">
					<h5 class="text-warning">การอบรมและการฝึกอบรมที่ดีอย่างมีประสิทธิภาพ</h5>
					<h1 class="fw-bold display-5">ให้ความรู้และความเข้าใจ</h1>
					<p class="lead">
						เพื่อเพิ่มความเข้าใจในการจัดการเก็บรักษาวัตถุอันตราย
						และเพิ่มความมั่นใจในการทำงานได้อย่างมีประสิทธิภาพ
					</p>
					<div class="action-btns mt-5">
						<a href="request-demo.html" class="btn btn-primary me-3">เปิดจองหลักสูตร</a>
						<a href="about-us.html" class="btn btn-outline-light">เพิ่มเติม</a>
					</div>
				</div>
				<!-- <div class="row justify-content-lg-start mt-60">
					<h6 class="text-white-70 mb-2">Our Top Clients:</h6>
					<div class="col-4 col-sm-3 my-2 ps-lg-0">
						<img src="/images/clients/client-1.svg" alt="client" class="img-fluid" />
					</div>
					<div class="col-4 col-sm-3 my-2">
						<img src="/images/clients/client-2.svg" alt="client" class="img-fluid" />
					</div>
					<div class="col-4 col-sm-3 my-2">
						<img src="/images/clients/client-3.svg" alt="client" class="img-fluid" />
					</div>
				</div> -->
			</div>
			<div class="col-lg-6 col-md-8 mt-5 mt-lg-0">
				<div class="animated-img-wrap">
					<!--animated shape start-->
					<ul class="animate-element parallax-element animated-hero-1">
						<li class="layer" data-depth="0.02">
							<img
								src="/images/screen/animated-screen-2.svg"
								alt="shape"
								class="img-fluid position-absolute type-0"
							/>
						</li>
					</ul>
					<!--animated shape end-->
					<img
						src="/images/screen/animated-screen-1.svg"
						alt="shape"
						class="position-relative img-fluid"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
<!--hero section end-->

<section class="promo-section ptb-120">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-6 col-md-10">
				<div class="section-heading text-center">
					<h2>เราช่วยให้คุณมีประสิทธิภาพมากขึ้น</h2>
					<p class="text-description">
						ช่วยเพิ่มความถูกต้องในการทำงาน ทำให้งานของคุณเป็นไปอย่างราบรื่น
						และช่วยให้คุณมีประสิทธิภาพมากขึ้น และเพิ่มความมั่นใจในการทำงาน
					</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6">
				<div
					class="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4"
				>
					<div class="promo-icon mb-32">
						<i class="fas fa-user-friends text-success fa-3x"></i>
					</div>
					<div class="promo-info">
						<h3 class="h5">จัดฝึกอบรม</h3>
						<p class="mb-0">
							จัดหลักสูตรอบรมเพื่อเป็นการเตรียมความพร้อมสำหรับบุคลากรเฉพาะรับผิดชอบความปลอดภัยการเก็บรักษาวัตถุอันตราย
						</p>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div
					class="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4"
				>
					<div class="promo-icon mb-32">
						<i class="fas fa-boxes-stacked text-danger fa-3x"></i>
						<i class="fa-duotone fa-solid fa-warehouse-full text-danger fa-3x"></i>
					</div>
					<div class="promo-info">
						<h3 class="h5">จัดหาสถานที่เก็บรักษา</h3>
						<p class="mb-0">
							จัดหาสถานที่เก็บรักษาวัตถุอันตรายที่มีความปลอดภัยสูงสุด
							และการจัดการวัตถุอันตรายอย่างถูกต้อง
						</p>
					</div>
					<div class="dot-shape-bg position-absolute z--1 right--40 bottom--40">
						<img src="/images/shape/dot-big-square.svg" alt="shape" />
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div
					class="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4"
				>
					<div class="promo-icon mb-32">
						<i class="fa-solid fa-handshake-simple text-primary fa-3x"></i>
					</div>
					<div class="promo-info">
						<h3 class="h5">บริการและให้คำปรึกษา</h3>
						<p class="mb-0">
							บริการและให้คำแนะนำและปรึกษาเกี่ยวกับการจัดการเก็บสาร การตรวจสอบ
							และการจัดการวัตถุอันตรายอย่างถูกต้อง
						</p>
					</div>
					<div class="dot-shape-bg position-absolute z--1 left--40 top--40">
						<img src="/images/shape/dot-big-square.svg" alt="shape" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="why-choose-us pt-60 pb-120 bg-green-subtle">
	<div class="container">
		<div class="row justify-content-lg-between justify-content-center align-items-center">
			<div class="col-lg-5 col-md-7 order-1 order-lg-0">
				<div class="why-choose-img position-relative">
					<img
						src="/images/a-website/toxic-chemicals-concept.png"
						class="img-fluid"
						alt="duel-phone"
					/>
				</div>
			</div>
			<div class="col-lg-6 col-md-12 order-0 order-lg-1">
				<div class="why-choose-content">
					<div class="mb-32">
						<h2>งานที่ปรึกษา บริการ การบริหารจัดการสารเคมี วัตถุอันตรายและสินค้าอันตราย</h2>
						<p class="text-description">
							พัฒนาความรู้และสร้างความเข้าใจเกี่ยวกับการจัดเก็บ สารเคมี/วัตถุอันตราย อย่างปลอดภัย
							และพัฒนาความรู้ความเข้าใจเกี่ยวกับข้อมูลที่เกี่ยวข้องกับสารเคมี/วัตถุอันตราย
						</p>
					</div>
					<ul class="list-unstyled d-flex flex-wrap list-two-col">
						<li class="py-1">
							<i class="fas fa-check-circle me-2 text-primary"></i>
							<span>การบริหารจัดการ สินค้าอันตราย</span>
						</li>
						<li class="py-1">
							<i class="fas fa-check-circle me-2 text-primary"></i>
							<span>กฎหมายที่เกี่ยวข้อง</span>
						</li>
						<li class="py-1">
							<i class="fas fa-check-circle me-2 text-primary"></i>
							<span>ประเมินความเสี่ยง และการหาแนวทางเพื่อลดความเสี่ยง</span>
						</li>
						<li class="py-1">
							<i class="fas fa-check-circle me-2 text-primary"></i>
							<span>ดำเนินการด้านใบอนุญาต นำเข้า ส่งออก ครอบครอง</span>
						</li>

						<li class="py-1">
							<i class="fas fa-check-circle me-2 text-primary"></i>
							<span> การจําแนกสารเคมีตามระบบการจัดเก็บตามประกาศกระทรวงอุตสาหกรรม </span>
						</li>
						<li class="py-1">
							<i class="fas fa-check-circle me-2 text-primary"></i>
							<span>จัดเตรียมข้อมูลเพื่อรองรับการตรวจประเมินระบบ ISO 9001, 14001, 45001</span>
						</li>
						<li class="py-1">
							<i class="fas fa-check-circle me-2 text-primary"></i>
							<span>จัดทำแผนฉุกเฉิน และฝึกซ้อมทีมฉุกเฉิน</span>
						</li>
						<li class="py-1">
							<i class="fas fa-check-circle me-2 text-primary"></i>
							<span>จัดหาอุปกรณ์ระงับเหตุฉุกเฉินที่เหมาะสม</span>
						</li>

						<li class="py-1">
							<i class="fas fa-check-circle me-2 text-primary"></i>
							<span>
								ออกแบบสถานที่จัดเก็บสารเคมีอันตราย อาคารคลังสินค้า สถานที่จัดเก็บภายนอกอาคาร
							</span>
						</li>
						<li class="py-1">
							<i class="fas fa-check-circle me-2 text-primary"></i>
							<span>
								การจำแนกสารเคมีตามหลักสากล UN Recommendations และความเสี่ยงของ สารเคมีแต่ละประเภท
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <section class="feature-section-two ptb-120">
	<div class="container">
		<div class="row align-items-center justify-content-lg-between justify-content-center">
			<div class="col-lg-6 col-md-12">
				<div class="feature-content-wrap">
					<div class="section-heading">
						<h2>We are development experts on all technologies</h2>
						<p>
							Quickly incubate functional channels with multidisciplinary architectures
							authoritatively fabricate formulate exceptional innovation.
						</p>
					</div>
					<ul class="list-unstyled mb-0">
						<li class="d-flex align-items-start mb-4">
							<div class="icon-box bg-primary rounded me-4">
								<i class="fas fa-bezier-curve text-white"></i>
							</div>
							<div class="icon-content">
								<h3 class="h5">Pixel Perfect Design</h3>
								<p>
									Progressively foster enterprise-wide systems whereas equity invested web-readiness
									harness installed expedite virtual networks.
								</p>
							</div>
						</li>
						<li class="d-flex align-items-start mb-4">
							<div class="icon-box bg-danger rounded me-4">
								<i class="fas fa-fingerprint text-white"></i>
							</div>
							<div class="icon-content">
								<h3 class="h5">Unique &amp; Minimal Design</h3>
								<p>
									Dramatically administrate progressive metrics without error-free globally simplify
									standardized plagiarize technically sound.
								</p>
							</div>
						</li>
						<li class="d-flex align-items-start mb-4 mb-lg-0">
							<div class="icon-box bg-dark rounded me-4">
								<i class="fas fa-headset text-white"></i>
							</div>
							<div class="icon-content">
								<h3 class="h5">24/7 Free Online Support</h3>
								<p>
									Interactively whiteboard transparent testing procedures before bricks-and-clicks
									initiatives competencies.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-lg-6 col-md-7">
				<div class="feature-img-wrap">
					<img
						src="/images/feature-hero-img.svg"
						alt="feature image"
						class="img-fluid rounded-custom"
					/>
				</div>
			</div>
		</div>
	</div>
</section> -->

<!-- <section class="integration-section ptb-120 bg-green-subtle">
	<div class="container">
		<div class="row align-items-center justify-content-lg-between">
			<div class="col-lg-6 col-md-12">
				<div class="section-heading">
					<h4 class="h5 text-primary">Integration</h4>
					<h2>We Collaborate with Top Software Company</h2>
					<p>
						Dynamically pursue convergence rather than 24/7 process improvements develop end-to-end
						customer service action items.
					</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-12">
				<div class="text-lg-end mb-5 mb-lg-0">
					<a href="integrations.html" class="btn btn-primary">View All Integrations</a>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="integration-wrapper position-relative w-100">
					<ul class="position-absolute animate-element parallax-element shape-service z--1">
						<li class="layer" data-depth="0.03">
							<img
								src="/images/shape/dot-dot-wave-shape.svg"
								alt="shape"
								class="img-fluid position-absolute color-shape-3"
							/>
						</li>
						<li class="layer" data-depth="0.03">
							<img
								src="/images/color-shape/feature-3.svg"
								alt="shape"
								class="img-fluid position-absolute color-shape-3"
							/>
						</li>
					</ul>
					<ul class="integration-list list-unstyled mb-0">
						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/airbnb.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/figma.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/facebook.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img
									src="/images/integations/sales-force.png"
									alt="integration"
									class="img-fluid"
								/>
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/atlassian.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/dropbox-2.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img
									src="/images/integations/dynamic-365.png"
									alt="integration"
									class="img-fluid"
								/>
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/erecruiter.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/evernote.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img
									src="/images/integations/google-icon.png"
									alt="integration"
									class="img-fluid"
								/>
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>

						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/slack.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>

						<li>
							<div class="single-integration bg-white">
								<img
									src="/images/integations/google-analytics.png"
									alt="integration"
									class="img-fluid"
								/>
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>

						<li>
							<div class="single-integration bg-white">
								<img
									src="/images/integations/google-drive.png"
									alt="integration"
									class="img-fluid"
								/>
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>

						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/hubspot.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>

						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/instagram.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/linkedin.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/mailchimp.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
						<li>
							<div class="single-integration bg-white">
								<img src="/images/integations/marekto.png" alt="integration" class="img-fluid" />
								<h6 class="mb-0 mt-4">Brand Name</h6>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section> -->

<!--blog section start-->
<!-- <section class="home-blog-section ptb-120 bg-light-subtle">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-6 col-md-12">
				<div class="section-heading text-center">
					<h4 class="text-primary h5">Blog</h4>
					<h2>Our Latest News and Update</h2>
					<p>
						Assertively maximize cost effective methods of iterate team driven manufactured products
						through equity invested via customized benefits.
					</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6">
				<div class="single-article rounded-custom mb-4 mb-lg-0">
					<a href="blog-single.html" class="article-img">
						<img src="/images/detail/detail_demo.jpeg" alt="article" class="img-fluid" />
					</a>
					<div class="article-content p-4">
						<div class="article-category mb-4 d-block">
							<a href="javascript:;" class="d-inline-block text-warning badge bg-warning-soft"
								>Design</a
							>
						</div>
						<a href="blog-single.html">
							<h2 class="h5 article-title limit-2-line-text">
								Do you really understand the concept of product value?
							</h2>
						</a>
						<p class="limit-2-line-text">
							Society is fragmenting into two parallel realities. In one reality, you have infinite
							upside and opportunity. In the other reality, you’ll continue to see the gap between
							your standard of living and those at the top grow more and more.
						</p>

						<a href="javascript:;">
							<div class="d-flex align-items-center pt-4">
								<div class="avatar">
									<img
										src="/images/testimonial/6.jpg"
										alt="avatar"
										width="40"
										class="img-fluid rounded-circle me-3"
									/>
								</div>
								<div class="avatar-info">
									<h6 class="mb-0 avatar-name">Jane Martin</h6>
									<span class="small fw-medium text-muted">April 24, 2021</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="single-article rounded-custom mb-4 mb-lg-0">
					<a href="blog-single.html" class="article-img">
						<img src="/images/blog/blog-2.jpg" alt="article" class="img-fluid" />
					</a>
					<div class="article-content p-4">
						<div class="article-category mb-4 d-block">
							<a href="javascript:;" class="d-inline-block text-primary badge bg-primary-soft"
								>Customer</a
							>
						</div>
						<a href="blog-single.html">
							<h2 class="h5 article-title limit-2-line-text">
								Why communities help you build better products for your business
							</h2>
						</a>
						<p class="limit-2-line-text">
							Society is fragmenting into two parallel realities. In one reality, you have infinite
							upside and opportunity. In the other reality, you’ll continue to see the gap between
							your standard of living and those at the top grow more and more.
						</p>

						<a href="javascript:;">
							<div class="d-flex align-items-center pt-4">
								<div class="avatar">
									<img
										src="/images/testimonial/1.jpg"
										alt="avatar"
										width="40"
										class="img-fluid rounded-circle me-3"
									/>
								</div>
								<div class="avatar-info">
									<h6 class="mb-0 avatar-name">Veronica P. Byrd</h6>
									<span class="small fw-medium text-muted">April 24, 2021</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="single-article rounded-custom mb-4 mb-lg-0 mb-md-0">
					<a href="blog-single.html" class="article-img">
						<img src="/images/blog/blog-3.jpg" alt="article" class="img-fluid" />
					</a>
					<div class="article-content p-4">
						<div class="article-category mb-4 d-block">
							<a href="javascript:;" class="d-inline-block text-danger badge bg-danger-soft"
								>Development</a
							>
						</div>
						<a href="blog-single.html">
							<h2 class="h5 article-title limit-2-line-text">
								Why communities help you build better products
							</h2>
						</a>
						<p class="limit-2-line-text">
							Society is fragmenting into two parallel realities. In one reality, you have infinite
							upside and opportunity. In the other reality, you’ll continue to see the gap between
							your standard of living and those at the top grow more and more.
						</p>

						<a href="javascript:;">
							<div class="d-flex align-items-center pt-4">
								<div class="avatar">
									<img
										src="/images/testimonial/3.jpg"
										alt="avatar"
										width="40"
										class="img-fluid rounded-circle me-3"
									/>
								</div>
								<div class="avatar-info">
									<h6 class="mb-0 avatar-name">Martin Gilbert</h6>
									<span class="small fw-medium text-muted">April 24, 2021</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="text-center mt-5">
				<a href="blog.html" class="btn btn-primary">View All Article</a>
			</div>
		</div>
	</div>
</section> -->
<!--blog section end-->
