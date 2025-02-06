<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	$: pageCurrent = $page.url.pathname.split('/').pop();

	async function handleLogout() {
		const response = await fetch('/api/logout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const result = await response.json();

		if (result.success) {
			// Redirect to login page after successful logout
			goto('/');
		}
	}
</script>

<header class="main-header w-100 z-10">
	<nav class="navbar navbar-expand-xl navbar-light sticky-header">
		<div class="container d-flex align-items-center justify-content-lg-between position-relative">
			<a href="/" class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none px-0">
				<img src="/images/logo.jpg" alt="logo" class="img-fluid logo-color" style="width: 113px;" />
			</a>

			<a
				class="navbar-toggler position-absolute right-0 border-0"
				href="#offcanvasWithBackdrop"
				role="button"
			>
				<i
					class="flaticon-menu"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasWithBackdrop"
					aria-controls="offcanvasWithBackdrop"
				/>
			</a>
			<div class="clearfix"></div>
			<div class="collapse navbar-collapse justify-content-center">
				<ul class="nav col-12 col-md-auto justify-content-center main-menu">
					<li>
						<a href="/" class="nav-link"> กลับสู่หน้าเว็บ </a>
					</li>
					<li>
						<a href="/admin/content" class="nav-link" class:active={pageCurrent === 'content'}>
							เนื้อหา
						</a>
					</li>
					<li>
						<a href="/admin/user" class="nav-link" class:active={pageCurrent === 'user'}>
							ผู้ใช้งาน
						</a>
					</li>
				</ul>
			</div>

			<div class="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
				<a class="btn btn-link text-decoration-none me-2" href="#" on:click={handleLogout}>
					ออกจากระบบ
				</a>
			</div>
		</div>
	</nav>

	<!--offcanvas menu start-->
	<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop">
		<div class="offcanvas-header d-flex align-items-center mt-4">
			<a href="index.html" class="d-flex align-items-center mb-md-0 text-decoration-none">
				<img src="/images/logo.jpg" alt="logo" class="img-fluid ps-2" style="width: 113px;" />
			</a>
			<button
				type="button"
				class="close-btn text-danger"
				data-bs-dismiss="offcanvas"
				aria-label="Close"
			>
				<i class="flaticon-cancel"></i>
			</button>
		</div>
		<div class="offcanvas-body">
			<ul class="nav col-12 col-md-auto justify-content-center main-menu">
				<li class="nav-item dropdown">
					<a class="nav-link" href="/" role="button"> กลับสู่หน้าเว็บ </a>
				</li>
				<li>
					<a
						href="/admin/content"
						class="nav-link"
						role="button"
						class:active={pageCurrent === 'about-us'}
					>
						เนื้อหา
					</a>
				</li>
				<li class="nav-item">
					<a href="/admin/content" class="nav-link" class:active={pageCurrent === 'consultancy'}>
						ผู้ใช้งาน
					</a>
				</li>
			</ul>
			<div class="action-btns mt-4 ps-3">
				<a class="btn btn-primary me-2" href="#" on:click={handleLogout}> ออกจากระบบ </a>
			</div>
		</div>
	</div>
</header>
