<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let email = '';
	let password = '';

	function handleSubmit() {
		return async ({
			result
		}: {
			result: { type: string; data?: { success: boolean }; status: number };
		}) => {
			if (result.status === 401) {
				console.log(result);
				alert(result.data?.error);
			}

			if (result.type === 'success' && result.data?.success) {
				// ถ้าล็อกอินสำเร็จ ให้ redirect ไปยังหน้า content
				goto('/admin/content');
			}
		};
	}
</script>

<div class="main-wrapper">
	<section
		class="sign-up-in-section bg-dark ptb-30"
		style="background: url('assets/img/page-header-bg.svg')no-repeat right bottom"
	>
		<div class="container">
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-5 col-md-8 col-12">
					<a href="/" class="mb-4 d-block text-center">
						<img src="/images/a-website/logo.jpg" alt="logo" class="img-fluid" style="width: 40%" />
					</a>
					<div class="register-wrap p-5 bg-light-subtle shadow rounded-custom">
						<form method="POST" use:enhance={handleSubmit} class="mt-4 register-form">
							<div class="row">
								<div class="col-sm-12">
									<label for="email" class="mb-1">Email <span class="text-danger">*</span></label>
									<div class="input-group mb-3">
										<input
											type="email"
											class="form-control"
											placeholder="Email"
											id="email"
											name="email"
											required
											bind:value={email}
										/>
									</div>
								</div>
								<div class="col-sm-12">
									<label for="password" class="mb-1">
										Password
										<span class="text-danger">*</span>
									</label>
									<div class="input-group mb-3">
										<input
											type="password"
											class="form-control"
											placeholder="Password"
											id="password"
											name="password"
											required
											bind:value={password}
										/>
									</div>
								</div>
								{#if form?.error}
									<p style="color: red;">{form.error}</p>
								{/if}
								<div class="col-12">
									<button type="submit" class="btn btn-primary mt-3 d-block w-100">Login</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
