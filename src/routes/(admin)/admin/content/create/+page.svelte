<script lang="ts">
	//
</script>

<section
	class="page-header position-relative overflow-hidden ptb-120 bg-dark"
	style="background: url('assets/img/page-header-bg.svg')no-repeat bottom left"
>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-8 col-md-12">
				<div class="text-center">
					<h1 class="display-5 fw-bold">Create Content</h1>
				</div>
			</div>
		</div>
		<div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5" />
	</div>
</section>

<section class="ptb-120">
	<div class="container">
		<div class="row justify-content-between">
			<div class="col-lg-12 col-md-12 d-none d-sm-block d-lg-block">
				<div class="support-article-wrap">
					<div class="d-flex align-items-center justify-content-sm-between">
						<h2>เนื้อหา</h2>
						<a class="btn btn-primary" href="/admin/content/create">สร้างเนื้อหา</a>
					</div>
					<table class="table table-striped table-hover border-top mt-1">
						<thead>
							<tr>
								<th scope="col">ลำดับ</th>
								<th scope="col">ชื่อเรื่อง</th>
								<th scope="col">หมวดหมู่</th>
								<th scope="col">วันที่สร้าง</th>
								<th scope="col">วันที่แก้ไข</th>
								<th scope="col">จัดการ</th>
							</tr>
						</thead>
						<tbody>
							<!-- {#if data.contents.length === 0}
								<tr>
									<td colspan="6" class="text-center">ไม่พบข้อมูล</td>
								</tr>
							{:else}
								{#each data.contents as content}
									<tr>
										<td>1</td>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
										<td></td>
										<td></td>
									</tr>
								{/each}
							{/if} -->
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</section>
