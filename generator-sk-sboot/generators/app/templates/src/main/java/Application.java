package <%= packageName %>;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class <%= appClassName %>Application {

	public static void main(String[] args) {
		SpringApplication.run(<%= appClassName %>Application.class, args);
	}
}