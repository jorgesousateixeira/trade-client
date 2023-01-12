import { useTranslation } from "react-i18next";
import styles from "./publicHome.module.css";
import { Fade } from "../../../animations/fade";

import background from "~/assets/images/public_airplaines-no-bg.svg";
import logo from "~/assets/images/logo.svg";
import { NavigateNext } from "@mui/icons-material";

export function PublicHome() {
	const { t } = useTranslation();
	
	return (
		<Fade>
			<div className={styles.publicMainOuterContainer}>
				<div className={styles.publicHomeHeader}>
					<div className={styles.appName}>
						<span>TRADE</span>
						<span>ADMINISTRATION</span>
					</div>
					<img className={styles.appLogo} src={logo} />
				</div>

				<div className={styles.publicOuterContainer}>
					<div className={styles.publicInfoContainer}>
						<div className={styles.publicHomeFloater}>
							<div className={styles.publicHomeQuotes}>
								<p>Network communications and partner management</p>
								<p>Keep track of all your connections</p>
								<p>Never lose sight of what’s important</p>
							</div>

							<div className={styles.publicHomeLogin}>
								<div>Login</div> <NavigateNext />
							</div>
						</div>
					</div>
					<div className={styles.publicImage} style={{ backgroundImage: `url(${background})` }}></div>
				</div>
			</div>
		</Fade>
	);
}
