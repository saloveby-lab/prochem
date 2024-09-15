<script lang="ts">
	export let form: any;

	let data = {
		email: '',
		password: ''
	};
	let errorMessage = '';
</script>

<div class="main-wrapper">
	<!--register section start-->
	<section
		class="sign-up-in-section bg-dark ptb-30"
		style="background: url('assets/img/page-header-bg.svg')no-repeat right bottom"
	>
		<div class="container">
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-5 col-md-8 col-12">
					<a href="index.html" class="mb-5 d-block text-center">
						<img src="/images/a-website/logo.jpg" alt="logo" class="img-fluid" style="width: 40%" />
					</a>
					<div class="register-wrap p-5 bg-light-subtle shadow rounded-custom">
						<form action="POST" class="mt-4 register-form">
							<div class="row">
								<div class="col-sm-12">
									<label for="email" class="mb-1">Email <span class="text-danger">*</span></label>
									<div class="input-group mb-3">
										<input
											type="email"
											class="form-control"
											placeholder="Email"
											id="email"
											required
											aria-label="email"
											bind:value={data.email}
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
											required
											aria-label="Password"
										/>
									</div>
								</div>
								{#if form?.error}
									<p style="color: red;">{form.error}</p>
								{/if}
								<div class="col-12">
									<button type="submit" class="btn btn-primary mt-3 d-block w-100">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--register section end-->
</div>
