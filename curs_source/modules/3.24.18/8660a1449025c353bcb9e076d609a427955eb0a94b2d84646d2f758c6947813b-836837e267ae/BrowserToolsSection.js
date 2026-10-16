import { $oC } from "./BrowserToolsSection.css";
import { mk } from "./gallerySection.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { Xo } from "./uuid_2.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var Hqv, Wqv, Gqv, qqv, zqv, Vqv, Kqv, Yqv, Xqv, Zqv, Qqv, Jqv, ezv, tzv, nzv, izv, rzv, Ruc;
export { Gqv, Hqv, Jqv, Kqv, Qqv, Ruc, Vqv, Wqv, Xqv, Yqv, Zqv, ezv, izv, nzv, qqv, rzv, tzv, zqv };
var __wakaru_GoC_initialized = false;
export function GoC() {
if (__wakaru_GoC_initialized) return;
__wakaru_GoC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), pi(), Xo(), vo(), mk(), $oC(), Hqv = wt("<span class=browser-tools-url>"), Wqv = wt("<div class=browser-tools-browser-placeholder><span>Initializing browser..."), Gqv = wt("<div class=browser-tools-error>"), qqv = wt("<div class=browser-tools-history-list>"), zqv = wt("<img class=browser-tools-screenshot-img alt=Screenshot>"), Vqv = wt("<span class=browser-tools-stat-badge> refs"), Kqv = wt("<span class=browser-tools-stat-badge> tokens"), Yqv = wt("<pre class=browser-tools-snapshot-pre>"), Xqv = wt("<div class=browser-tools-snapshot-content>"), Zqv = wt("<div class=browser-tools-benchmark-content><table class=browser-tools-benchmark-table><thead><tr><th>Tool</th><th>Avg</th><th>P95</th></tr></thead><tbody>"), Qqv = wt('<div class=browser-tools-section><div class=browser-tools-top-row><div class=browser-tools-browser-panel><div class=browser-tools-panel-header><span>Browser View</span></div><div class=browser-tools-browser-container></div></div><div class=browser-tools-controls-column><div class=browser-tools-compact-panel><div class=browser-tools-panel-header>Navigation</div><div class=browser-tools-compact-content><div class=browser-tools-input-row><input type=text placeholder=https://example.com><button>Go</button><button title="Load test page">Test</button></div><div class=browser-tools-action-buttons><button>Back</button><button>Fwd</button><button>Reload</button></div></div></div><div class=browser-tools-compact-panel><div class=browser-tools-panel-header>Element Actions</div><div class=browser-tools-compact-content><div class=browser-tools-input-row><input type=text placeholder="e0, e1..."list=ref-suggestions><button>Click</button><button>Hover</button></div><datalist id=ref-suggestions></datalist><div class=browser-tools-input-row><input type=text placeholder="Text to type"><button>Type</button></div></div></div><div class=browser-tools-compact-panel><div class=browser-tools-panel-header>Tools</div><div class=browser-tools-compact-content><div class=browser-tools-action-buttons><button>Screenshot</button><button>Snapshot</button></div><div class=browser-tools-action-buttons><button>Up</button><button>Down</button><button>Esc</button><button>Enter</button><button>Tab</button></div></div></div></div></div><div class=browser-tools-bottom-row><div class=browser-tools-metrics-panel><div class=browser-tools-panel-header>Latency<button class=browser-tools-clear-btn>Clear</button></div><div class=browser-tools-metrics-content><div class=browser-tools-latency-grid></div></div></div><div class=browser-tools-screenshot-panel><div class=browser-tools-panel-header>Screenshot</div><div class=browser-tools-screenshot-content></div></div><div class=browser-tools-snapshot-panel><div class=browser-tools-panel-header><span>Snapshot</span><div class=browser-tools-header-controls><button class=browser-tools-toggle-btn></button></div></div></div><div class=browser-tools-benchmark-panel><div class=browser-tools-panel-header>Benchmark<div class=browser-tools-header-controls><input type=number min=1 max=100><button>'), Jqv = wt("<option>"), ezv = wt("<div class=browser-tools-latency-item><span class=browser-tools-latency-tool></span><span class=browser-tools-latency-value>"), tzv = wt("<div class=browser-tools-history-item><span class=browser-tools-history-tool></span><span class=browser-tools-history-latency></span><span>"), nzv = wt("<span class=browser-tools-placeholder>No screenshot yet"), izv = wt("<span class=browser-tools-placeholder>No snapshot yet"), rzv = wt("<tr><td></td><td></td><td>"), Ruc = `
<!DOCTYPE html>
<html>
<head>
	<title>Browser Tools Test Page</title>
	<style>
		body { font-family: system-ui, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; }
		h1 { color: #333; }
		.form-group { margin-bottom: 16px; }
		label { display: block; margin-bottom: 4px; font-weight: 500; }
		input, select, textarea { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
		button { padding: 10px 20px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 8px; }
		button:hover { background: #0052a3; }
		.checkbox-group { display: flex; align-items: center; gap: 8px; }
		.checkbox-group input { width: auto; }
		a { color: #0066cc; }
		#results { margin-top: 20px; padding: 16px; background: #f5f5f5; border-radius: 4px; min-height: 50px; }
	</style>
</head>
<body>
	<h1>Browser Tools Test Page</h1>
	<form id="test-form">
		<div class="form-group">
			<label for="email">Email</label>
			<input type="text" id="email" name="email" placeholder="Enter your email">
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input type="password" id="password" name="password" placeholder="Enter password">
		</div>
		<div class="form-group">
			<label for="country">Country</label>
			<select id="country" name="country">
				<option value="us">United States</option>
				<option value="ca">Canada</option>
				<option value="uk">United Kingdom</option>
				<option value="de">Germany</option>
			</select>
		</div>
		<div class="form-group">
			<label for="message">Message</label>
			<textarea id="message" name="message" rows="3" placeholder="Type your message"></textarea>
		</div>
		<div class="form-group checkbox-group">
			<input type="checkbox" id="remember" name="remember">
			<label for="remember" style="display:inline; font-weight:normal;">Remember me</label>
		</div>
		<button type="submit" id="submit-btn">Submit</button>
		<button type="button" id="clear-btn">Clear</button>
	</form>
	<p><a href="#forgot" id="forgot-link">Forgot password?</a></p>
	<div id="results">Results will appear here</div>
	<script>
		document.getElementById('test-form').addEventListener('submit', function(e) {
			e.preventDefault();
			const formData = new FormData(e.target);
			const data = Object.fromEntries(formData.entries());
			document.getElementById('results').textContent = 'Submitted: ' + JSON.stringify(data);
		});
		document.getElementById('clear-btn').addEventListener('click', function() {
			document.getElementById('test-form').reset();
			document.getElementById('results').textContent = 'Form cleared';
		});
	</script>
</body>
</html>
`;

}
